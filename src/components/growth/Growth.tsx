import React from 'react'
import { useRef, useState, useEffect } from 'react';
import "./growth.css";
import { growthContent } from '../../constants';
import CountUp from "react-countup";

const Growth = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && ref.current) {
                    setInView(true);
                    observer.unobserve(ref.current);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return (
        <div className='growth-container'>
            <div className='growth-header section-header'>Experts growts</div>
            <div className='growth-sub-header section-sub-header'>
                Our Company Growth
            </div>
            <div className='growth-content'>
                {growthContent.map((each, idx) => {
                    return (
                        <div className='growth-content-item-card' key={idx}>
                            <div className='growth-content-item-icon'>
                                <img src={each.icon} alt={each.title} width={34} height={39} />
                            </div>
                            <div className='growth-content-item-stat' ref={ref}>
                                {inView ? <><CountUp end={each.stat} duration={2} />+</> : '0'}
                            </div>
                            <div className='growth-content-item-title'>{each.title}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Growth;