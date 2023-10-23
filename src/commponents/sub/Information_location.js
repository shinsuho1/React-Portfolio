import { useRef, useReducer } from "react";
const { kakao } = window;

const intialState = {
    location: null,
    index: 0,
    info: [
        {
            title: "한국마인크로소프트",
            latlng: new kakao.maps.LatLng(37.5746932, 126.9789672),
            imgSrc: `${process.env.PUBLIC_URL}/img/sub/information/Microsoft.png`,
            imgSize: new kakao.maps.Size(123, 40),
            imgPoz: { offset: new kakao.maps.Point(102, 40) },
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_LOCATION":
            return {
                ...state,
                location: action.loadMap,
            };

        case "SET_INDEX":
            return {
                ...state,
                index: action.idx,
            };
        default:
            return state;
    }
}

function Information_location() {
    const [state, dispatch] = useReducer(reducer, intialState);
    const container = useRef(null);
    const frame = useRef(null);
    const { index, info } = state;

    const options = {
        center: info[index].latlng,
        level: 6,
    };
    const imgSrc = info[index].imgSrc;
    const imgSize = info[index].imgSize;
    const imgPoz = info[index].imgPoz;
    const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPoz);

    const viewMap = () => {
        container.current.innerHTML = "";

        const marker = new kakao.maps.Marker({
            position: options.center,
            image: markerImage,
        });

        const map_instance = new kakao.maps.Map(container.current, options);
        marker.setMap(map_instance);

        dispatch({ type: "SET_LOCATION", loadMap: map_instance });

        const mapTypeControl = new kakao.maps.MapTypeControl();
        map_instance.addControl(
            mapTypeControl,
            kakao.maps.ControlPosition.RIGHT
        );
        const zoomControl = new kakao.maps.ZoomControl();
        map_instance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    };

    return (
        <article
            className="hide"
            ref={frame}
        >
            <div className="text" >
                <h2>Microsoft Address</h2>
                <p>Current actual address of Microsoft Korea</p>
            </div>

            <div className="pic" >
                <div id="map" ref={container}>
                    <div className="btn" onClick={(e) => {
                        frame.current.classList.add("address");
                        setTimeout(() => {
                            viewMap();
                        }, 800);
                        window.scrollTo({ left: 0, top: frame.current.offsetTop, behavior: "smooth" });
                    }}>View Loaction</div>
                </div>
            </div>
        </article>
    );
}

export default Information_location;
