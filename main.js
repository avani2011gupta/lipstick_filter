function preload()
{

}

function setup()
{
    canvas = createCanvas(600, 530);
    video = createCapture(VIDEO); 
    video.hide();
}

function draw()
{
    image(video, 0, 0, 640, 530);
}

function snapshot(){ 
    save('lipstick_filter.png'); 
} 