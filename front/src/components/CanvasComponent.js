import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import FamilyTree from "./FamilyTree";
import axios from "axios";

let FIELD_BACKGROUND = "#efefef";
let NODE_SIZE = 50;
let NODE_BORDER_WIDTH = NODE_SIZE / 6;
let STATUS_COLORS = {
    observer: '#2e90db',
    baby: '#2bb31e',
    full: '#db741a',
    alumni: "#383838",
    root: "#383838"
};
let DEFAULT_BACKGROUND = '#dfdfdf';
let DEFAULT_IMAGE = new Image();
DEFAULT_IMAGE.src = "root.png";
let NODE_DISTANCE = NODE_SIZE * 1.2;
let ROOT_SPAN = Math.PI * 2;
let ROOT_IMAGE = new Image();
ROOT_IMAGE.src = 'root.png';
let DEFAULT_SPAN = Math.PI;
let CONNECTION = 'http://localhost:8081';

let persons;

class TreeNode {
    constructor(x=0, y=0, personId, labelText='user', status='observer', span = DEFAULT_SPAN, image = DEFAULT_IMAGE,
                size = NODE_SIZE, childrenList = []) {
        this.pos = {x: x, y: y};
        this.id = personId;
        this.label = labelText;
        this.childNodes = childrenList;
        this.status = status;
        this.image = image;
        this.size = size;
        this.childrenSpan = span;
        this.direction = 0;
    }

    draw() {
        // Drawing node background
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = DEFAULT_BACKGROUND;
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI);
        ctx.fill();

        // Placing image
        // ctx.clip();
        // ctx.drawImage(this.image, this.pos.x - this.size, this.pos.y - this.size,
        //     this.size * 2, this.size * 2);
        // ctx.restore();

        // Drawing border
        this.border = this.size / 6;
        ctx.strokeStyle = STATUS_COLORS[this.status];
        ctx.lineWidth = this.border;
        ctx.stroke();
        ctx.closePath();

        // Adding label
        this.safeSpace = this.size / 2.7;
        ctx.font = (this.size / 2.5).toString() + 'px Roboto';
        let text = ctx.measureText(this.label);
        ctx.beginPath();
        ctx.fillStyle = FIELD_BACKGROUND;
        ctx.fillRect(
            this.pos.x - text.width / 2 - 2,
            this.pos.y + this.size + this.border + this.safeSpace - this.size / 2.5,
            text.width + 4,
            this.size / 2.5 + 4
        );

        ctx.fillStyle = "#2E4E5E";
        ctx.textAlign = 'center';
        ctx.fillText(this.label, this.pos.x, this.pos.y + this.size + this.safeSpace + this.border);
    }

    drawChildren(){
        if(this.childNodes.length === 0){
            return new Error('Node has no children');
        }

        let newX, newY, newSize;
        let distance = NODE_DISTANCE + this.size * 2 + NODE_BORDER_WIDTH * 2;
        let radStep = this.childrenSpan / (this.childNodes.length);
        for(let i = 0; i < this.childNodes.length; i++) {
            newSize = (
                NODE_DISTANCE * Math.cos(radStep / 2) /
                (Math.cos(radStep/2) / Math.sin(radStep / 2) - Math.cos(radStep / 2))
            );
            this.childNodes[i].direction = (radStep * i) + radStep/2;
            this.childNodes[i].direction = this.direction - this.childrenSpan / 2 + this.childNodes[i].direction;
            if(this.childNodes[i].direction < 0)
                this.childNodes[i].direction += Math.PI * 2;
            newSize = newSize / 100 * 85.7;
            newX = this.pos.x + (distance * Math.sin(this.childNodes[i].direction));
            newY = this.pos.y + (distance * Math.cos(this.childNodes[i].direction));
            this.childNodes[i].pos = {x: newX, y: newY};
            if(newSize > this.size){
                newSize = this.size;
            }
            this.childNodes[i].size = newSize;

            // Connecting line
            ctx.beginPath();
            ctx.moveTo(this.pos.x,this.pos.y);
            ctx.lineTo(this.childNodes[i].pos.x,this.childNodes[i].pos.y);
            ctx.closePath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#383838";
            ctx.stroke();

            this.childNodes[i].draw();
        }

        this.draw();

    }

    addChild(node){
        this.childNodes.push(node);
    }
}

let canvas, ctx;
let root;

class CanvasComponent extends Component {
    state = {
        users: []
    };

    static generateChild(node){
        // Generating children for current node
        for(let i = 0; i < persons.length; i++){
            if(persons[i].parentId === node.id){
                node.addChild(new TreeNode(0,0,persons[i].id,
                    persons[i].firstName + ' ' + persons[i].secondName, persons[i].status, DEFAULT_SPAN,
                    persons[i].img));
            }
        }
        node.drawChildren();

        if(node.childNodes.length < 1){
            return;
        }

        CanvasComponent.generateChild(node.childNodes[0]);

    }

    static generateRoot(parent) {
        parent.draw();
        for(let i = 0; i < persons.length; i++){
            if(!persons[i].parentId){
                parent.addChild(new TreeNode(0,0,persons[i].id,
                    persons[i].firstName + ' ' + persons[i].secondName, persons[i].status, DEFAULT_SPAN,
                    persons[i].img));
            }
        }
        parent.drawChildren();
        for(let i = 0; i < parent.childNodes.length; i++){
            CanvasComponent.generateChild(parent.childNodes[i]);
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8081/person')
            .then(res => {
                this.setState({ users: res.data });
                persons = res.data;
                this.updateCanvas();
            });

    }

    updateCanvas() {
        canvas = this.refs.canvas;
        ctx = canvas.getContext('2d');
        this.root = new TreeNode(canvas.width / 2, canvas.height / 2, 'root', 'BEST Lviv', 'root', ROOT_SPAN);
        CanvasComponent.generateRoot(this.root);
    }
    render() {
        return (
            <canvas ref="canvas" width={1300} height={650}/>
        );
    }
}
// ReactDOM.render(<CanvasComponent/>, document.getElementById('container'));

export default CanvasComponent;