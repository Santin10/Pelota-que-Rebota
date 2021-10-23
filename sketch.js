const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    //opciones para el piso
    var ground_options ={
        isStatic: true
    }
    //se crea el piso, se agrega al punto
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    //características de la pelota
    var ball_options ={
        restitution: 6.0
    }

    //se crea la pelota y se añade al mundo
    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}