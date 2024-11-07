import React, { useEffect, useRef } from 'react';

const ProjectPreview = () => {

    let canvas = document.getElementById('scratch-card1');
    let context = canvas.getContext('2d');

    const init = () => {
        context.fillStyle = 'red';
        context.fillRect(0, 0, 300, 100);
    };
    let isDragging = false;
    canvas.addEventListener('mousedown', (event) => {
        isDragging = true;
        scratch(event.offsetX, event.offsetY);
    });

    canvas.addEventListener('mousemove', (event) => {
        if (isDragging) {
            scratch(event.offsetX, event.offsetY);
        }
    });

    canvas.addEventListener('mouseup',)

    init();

  return (
    <>
    <div className='main-container'>
        <h2 className='main-heading'>
            scratch the reveal
        </h2>
        <h3>blah blah blah</h3>

        <div className='scratch-container'>
            <div className='scratch-card'>
                <div className='code'>
                    hkbdfsb
                </div>
                <canvas id='scratch-card1' width='300' height='100'></canvas>
            </div>
        </div>
    </div>
    </>
  )
};

export default ProjectPreview;
