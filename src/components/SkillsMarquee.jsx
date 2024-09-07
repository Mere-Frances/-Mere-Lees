import React, { useEffect } from 'react';
import gsap from 'gsap';

const Marquee = () => {
  useEffect(() => {
    const horizontalLoop = (items, config) => {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: 'none' },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;

      gsap.set(items, {
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px')));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, 'x', 'px')) / w) * 100 +
            gsap.getProperty(el, 'xPercent')
          );
          return xPercents[i];
        },
      });

      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') +
        (parseFloat(config.paddingRight) || 0);

      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');
        tl.to(
          item,
          {
            xPercent: snap((curX - distanceToLoop) / widths[i] * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) },
            {
              xPercent: xPercents[i],
              duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add('label' + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }

      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }

      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    };

    const loops = gsap.utils.toArray('.text-single').map((line, i) => {
      const links = line.querySelectorAll('.js-text');
      return horizontalLoop(links, {
        repeat: -1,
        speed: 1.5 + i * 0.5,
        reversed: false,
        paddingRight: parseFloat(gsap.getProperty(links[0], 'marginRight', 'px')),
      });
    });

    console.log("GSAP Loops", loops);

  }, []);

  return (
    <div className="scroll">
      <div className="text-marquee">
        <div className="text-single">
          <span className="text js-text">React</span>
          <span className="text js-text">API's</span>
          <span className="text js-text">Fullstack</span>
          <span className="text js-text">JQuery</span>
          <span className="text js-text">SCSS/SASS</span>
          <span className="text js-text">Javascript</span>
          <span className="text js-text">Figma</span>
          <span className="text js-text">Collaboration</span>
          <span className="text js-text">HTML</span>
          <span className="text js-text">Frontend</span>
          <span className="text js-text">Backend</span>
          <span className="text js-text">JS Libraries</span>
          <span className="text js-text">JS Packages</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
