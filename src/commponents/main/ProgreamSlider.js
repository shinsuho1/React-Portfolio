import React, { memo } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ProgreamSlider() {


    return (
        <section className="progream page">
            <div className="inner">
                <Swiper modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false, duration: 500 }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    spaceBetween={0}
                    loop={true}
                    slidesPerView={1}
                    centeredSlides={true}>


                    <SwiperSlide>
                        <div className="excel title" >
                            <h2>Document Processing Program</h2>
                            <h1>Excel</h1>
                        </div>
                        <div className="excel box">
                            <div className="pic">
                                <article className="text">
                                    <h2>Excel</h2>
                                    <h3>Make business decisions easily</h3>
                                    <p>
                                        Copilot in Excel helps you analyze and
                                        view your data to make the best
                                        decisions. Copilot can spot trends,
                                        suggest what-if scenarios, suggest ideas
                                        to improve your business, and build it
                                        all into an easy-to-read dashboard.
                                    </p>
                                    <h3>Display data clearly</h3>
                                    <p>
                                        Use new charts and graphs to visualize
                                        your data in powerful ways, and formats,
                                        sparklines, and tables make your data
                                        easier to understand and predict trends.
                                    </p>

                                    <div className="btn">
                                        <button>Buy Now</button>
                                        <button>Try it for free</button>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/main//Progream/Excel.png`}
                                        alt="Uses Excel's chart/table functions and can be used on mobile phones and computers."
                                    />
                                </article>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="powerpoint title">
                            <h2>Document Processing Program</h2>
                            <h1>Powerpoint</h1>
                        </div>
                        <div className="powerpoint box">
                            <div className="pic">
                                <article>
                                    <h2>Powerpoint</h2>
                                    <h3>Turn your ideas into presentations</h3>
                                    <p>
                                        Turn your ideas into customized presentations with Copilot in PowerPoint. Copilot turns existing Word documents into presentations, prompts
                                        you to create new presentations based on your outline, and finds the best places to place eye-catching images. Captivate your audience with skillful storytelling.
                                    </p>
                                    <h3>Simpler slide design than ever</h3>
                                    <p>
                                        Use PowerPoint’s designers and ideas to create beautifully designed, impactful slides.
                                    </p>

                                    <div className="btn">
                                        <button>Buy Now</button>
                                        <button>Try it for free</button>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/main/Progream/Powerpoint.avif`}
                                        alt="Uses Powerpoint's making ppt and can be used on mobile phones and computers."
                                    />
                                </article>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="word title">
                            <h2>Document Processing Program</h2>
                            <h1>Word</h1>
                        </div>
                        <div className="word box">
                            <div className="pic">
                                <article>
                                    <h2>Word</h2>
                                    <h3>Improve your writing skills</h3>
                                    <p>
                                        Copilot in Word helps you create, edit,
                                        summarize, and provide recommendations
                                        on your documents. Copilot drafts with
                                        input from across your organization,
                                        adds content to existing documents,
                                        summarizes text, and rewrites individual
                                        sections or entire documents to simplify
                                        them.
                                    </p>
                                    <h3>Your documents from anywhere</h3>
                                    <p>
                                        Store your documents in OneDrive and
                                        access them from any device with
                                        confidence knowing your files are
                                        protected from digital attacks with
                                        built-in ransomware detection.
                                    </p>

                                    <div className="btn">
                                        <button>Buy Now</button>
                                        <button>Try it for free</button>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/main/Progream/Word.png`}
                                        alt="Uses Word's Organize your notes/attribute function and can be used on computer."
                                    />
                                </article>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="access title">
                            <h2>Document Processing Program</h2>
                            <h1>Access</h1>
                        </div>
                        <div className="access box">
                            <div className="pic">
                                <article>
                                    <h2>Access</h2>
                                    <h3>Escalation of data privileges</h3>
                                    <p>
                                        Easily create your own database app in
                                        the format that best suits your
                                        business. PC only.
                                    </p>
                                    <h3>
                                        Integrate with multiple data sources
                                    </h3>
                                    <p>
                                        Integrate data between Access and
                                        line-of-business apps using the Access
                                        connector library to create aggregated
                                        visuals and insights in the familiar
                                        Access interface. Simply storing your
                                        data in SQL Server and Microsoft Azure
                                        SQL improves reliability, scalability,
                                        and long-term manageability.
                                    </p>

                                    <div className="btn">
                                        <button>Buy Now</button>
                                        <button>Try it for free</button>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/main/Progream/Access.jpg`}
                                        alt="edits data from many customer materials"
                                    />
                                </article>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="teams title">
                            <h2> Video conference, meeting call</h2>
                            <h1>Teams</h1>
                        </div>
                        <div className="teams box">
                            <div className="pic">
                                <article>
                                    <h2>Teams</h2>
                                    <h3>Class</h3>
                                    <p>
                                        Share your screen, change the background
                                        or blur it, and use Together mode to
                                        feel like you're almost in the same
                                        room.
                                    </p>
                                    <h3>Call</h3>
                                    <p>
                                        Make and receive calls right from Teams
                                        with advanced features like group
                                        calling, voicemail, and phone linking.
                                        The ability to make and receive calls
                                        between landlines and mobile phones over
                                        the PSTN in Teams is available as an
                                        add-on, such as the Teams Phone standard
                                        plan or Teams Phone with Calling Plan,
                                        or is included in Microsoft 365 E5.
                                    </p>

                                    <div className="btn">
                                        <button>Buy Now</button>
                                        <button>Try it for free</button>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/main/Progream/Teams.jpg`}
                                        alt="8 people are working on a team project (video conference)"
                                    />
                                </article>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="onedrive title">
                            <h2>Personal Cloud Storage</h2>
                            <h1>OneDrive</h1>
                        </div>
                        <div className="onedrive box">
                            <div className="pic">
                                <article>
                                    <h2>OneDrive</h2>
                                    <h3>Wireless Mobility</h3>
                                    <p>
                                        Create, view, edit, and share files on
                                        the go with the OneDrive mobile app.
                                        Easily capture whiteboards and scan
                                        business receipts, business cards, and
                                        other paper documents to keep them safe.
                                    </p>
                                    <h3>Security Controls</h3>
                                    <p>
                                        Back up and protect your files with
                                        OneDrive. Files can be easily recovered
                                        even if accidentally deleted or
                                        subjected to a malicious attack, and
                                        administrators can manage security
                                        policies to help keep information safe.
                                    </p>

                                    <div className="btn">
                                        <button>Buy Now</button>
                                        <button>Try it for free</button>
                                    </div>
                                </article>
                                <article>
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/main/Progream/Onedrive.avif`}
                                        alt=" Check your files/data through OneDrive and share them with your mobile phone."
                                    />
                                </article>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default memo(ProgreamSlider);
