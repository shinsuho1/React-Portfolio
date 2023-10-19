import React, { useReducer } from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Pop from "../common/Pop";
const { kakao } = window;
function Information() {
    const main = useRef(null);
    const pop = useRef(null);

    const locationPop = useRef(null);
    const [Index, setIndex] = useState(0);

    const [asideTitle, setasideTitle] = useState("");
    const [asideExplan, setasideExplan] = useState("");
    const [asideImg, setasideImg] = useState("");

    const asides = [
        {
            img: "img/sub/information/First_article_2.png",
            title: "Microsoft365",
            explan: "Microsoft 365 is a package/subscription type that bundles programs together for use in various situations.",
        },
        {
            img: "img/sub/information/unauth-m365-hero-treatment-b-288e7c77d3.png",
            title: "Introduction",
            explan: "Microsoft 365 is a package that includes everything including document work,video editing, presentations, databases, team projects, synchronization, and diversity.",
        },
    ];

    // const getOffsetTop = () => {
    //     const sections = frame.current.parentElement.querySelectorAll(".hide");
    //     const sectionsArr = Array.from(sections);
    //     sectionsArr.map((el) => {
    //         posArr.push(el.offsetTop);
    //     });
    // }

    useEffect(() => {
        setTimeout(() => {
            main.current.classList.add("active");
            setTimeout(() => {
                const article = main.current.parentElement.querySelectorAll(".hide");
                article.forEach((el, index) => {
                    article[index].classList.add("active");
                });
            }, 500);
        }, 300);
    }, []);

    const kakaoApi = () => {
        var container = document.getElementById("map");
        const btns = document.querySelectorAll(".btns>li");
        const main_txt = document.querySelector(".location>.txt1");

        var options = {
            center: new kakao.maps.LatLng(37.5746932, 126.9789672),
            level: 1,
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        var markerPosition = new kakao.maps.LatLng(37.5746932, 126.9789672); //

        var markerOptions = [
            {
                title: "Headquarters",
                latlng: new kakao.maps.LatLng(37.5746932, 126.9789672),
                office: "한국마이크로소프트",
                address: "서울 종로구 종로1길 50 더케이트윈타워 A동",
                button: btns[0],
            },
            {
                title: "Branch",
                latlng: new kakao.maps.LatLng(37.5261578, 126.9285498),
                office: "마이크로소프트 더현대서울점",
                address: "서울특별시 영등포구 여의동 22",
                button: btns[1],
            },
        ];

        for (let i = 0; i < markerOptions.length; i++) {
            new kakao.maps.Marker({
                map: map,
                position: markerOptions[i].latlng,
                title: markerOptions[i].title,
                image: new kakao.maps.MarkerImage(
                    `${process.env.PUBLIC_URL}/img/sub/information/Microsoft.png`,
                    new kakao.maps.Size(102, 40),
                    { offset: new kakao.maps.Point(102, 40) }
                ),
            });

            markerOptions[i].button.addEventListener("click", (e) => {
                e.preventDefault();

                let title = main_txt.querySelector(".title");
                title.innerText = markerOptions[i].title;

                let address = main_txt.querySelector(".address");
                address.innerText = markerOptions[i].address;

                let office = main_txt.querySelector(".office");
                office.innerText = markerOptions[i].office;

                for (let j = 0; j < markerOptions.length; j++) {
                    markerOptions[j].button.classList.remove("on");
                }
                markerOptions[i].button.classList.add("on");
                map.setCenter(markerOptions[i].latlng);
            });
        }

        var mapTypeControl = new kakao.maps.MapTypeControl();

        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    }

    return (
        <section className="content information" ref={main}>
            <div className="inner">
                <h1>
                    Information <span>Microsoft365</span>
                </h1>

                <article
                    className="hide"
                    onClick={() => {
                        setIndex(0);
                        pop.current.open();
                    }}
                >
                    <div className="pic">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/sub/information/First_article_1.png`}
                            alt="microsoft-365 logo"
                        />
                    </div>
                    <div className="text">
                        <h2>Microsoft365</h2>
                        <p>
                            Microsoft 365 is a package/subscription type that
                            bundles programs together for use in various
                            situations.
                        </p>
                    </div>
                </article>
                <article
                    className="hide"
                    onClick={() => {
                        setIndex(1);
                        pop.current.open();
                    }}
                >
                    <div className="pic">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/sub/information/Second_article_1.jpg`}
                            alt="microsoft's five program img"
                        />
                    </div>
                    <div className="text">
                        <h2>Introduction</h2>
                        <p>
                            Microsoft 365 is a package that includes everything
                            including document work, video editing,
                            presentations, databases, team projects,
                            synchronization, and diversity.
                        </p>
                    </div>
                </article>
                <article
                    className="address hide"
                    onClick={() => {
                        // kakaoApi();
                        // locationPop.current.classList.add("on");
                        setIndex(2);
                        pop.current.open();
                    }}
                >
                    <div className="text">
                        <h2>Microsoft Address</h2>
                        <p>Current actual address of Microsoft Korea</p>
                    </div>
                    <div className="pic">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/sub/information/loaction.jpg`}
                            alt="In korea loaction img"
                        />
                    </div>
                </article>
            </div>

            {Index === 0 &&
                <Pop ref={pop}>
                    <div className="txt">
                        <h1>{asides[0].title}</h1>
                        <p>{asides[0].explan}</p>
                    </div>
                    <figure>
                        <img src={`${process.env.PUBLIC_URL}/${asides[0].img}`} alt={asides[0].title} />
                    </figure>
                </Pop>}
            {Index === 1 &&
                <Pop ref={pop}>
                    <div className="txt">
                        <h1>{asides[1].title}</h1>
                        <p>{asides[1].explan}</p>
                    </div>
                    <figure>
                        <img src={`${process.env.PUBLIC_URL}/${asides[1].img}`} alt={asides[1].title} />
                    </figure>
                </Pop>}
            {Index === 2 &&
                <Pop ref={pop}>
                    <div className="txt">
                        <h1>한국마이크로소프트</h1>
                        <p>Headquarters</p>
                        <p>서울 종로구 종로1길 50 더케이트윈타워 A동</p>
                    </div>
                    <figure>
                        <div id="map"></div>
                    </figure>
                    <ul className="btns">
                        <li className="on">
                            <Link to="/">Headquarters</Link>
                        </li>
                        <li>
                            <Link to="/">Branch</Link>
                        </li>
                    </ul>
                </Pop>}


            <aside className="location" ref={locationPop}>
                <div className="txt1">
                    <h1 className="office">한국마이크로소프트</h1>
                    <span className="title">Headquarters</span>
                    <p className="address">
                        서울 종로구 종로1길 50 더케이트윈타워 A동
                    </p>
                    <span
                        className="location_close"
                        onClick={() => {
                            locationPop.current.classList.remove("on");
                        }}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </span>
                </div>
                <figure>
                    <div id="map"></div>
                </figure>
                <ul className="btns">
                    <li className="on">
                        <Link to="/">Headquarters</Link>
                    </li>
                    <li>
                        <Link to="/">Branch</Link>
                    </li>
                </ul>
            </aside>
        </section>
    );
}

export default Information;
