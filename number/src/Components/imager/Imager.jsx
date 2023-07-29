import React, { useEffect, useState } from "react";
import axios from "axios";
// import axio from "../../public/land.jpg";
import "./imager.css";
// import logo from "../../public/land.jpg";
function Imager() {
  const [tour, settour] = useState([
    {
      _id: 2,
      userId: 1234567896,
      img: "http://localhost:8800/img/goku.png",
      desc: "chats",
      likes: 5,
    },

    {
      _id: 3,
      userId: 12345647896,
      img: "http://localhost:8800/img/bleach.jpg",
      desc: "chats",
      likes: 5,
    },
    {
      _id: 1,
      userId: 12234567896,
      img: "http://localhost:8800/img/luffy.jpg",
      desc: "chats",
      likes: 6,
    },
  ]);
  const [chat, setchat] = useState(0);
  const [chats, setchats] = useState("");
  const arz = (ele) => {
    settour(
      tour.map((tours) => {
        if (chat === chat) {
          if (tours._id === ele._id) {
            return { ...tours, likes: tours.likes * 1 + 1 };
          } else {
            return tours;
          }
        } else {
          if (tours._id === ele._id) {
            return { ...tours, likes: tours.likes * 1 - 1 };
          } else {
            return tours;
          }
        }
      })
    );
    handel(ele);
  };
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8800/api/posts/");
        // console.log(res.data);
        settour(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [chat]);
  // const handelz = async (n) => {
  //   // console.log(n + 1);
  //   // const m = n * 1 + 1;
  //   // setchats(n * 1);
  //   setchats(chats === 0 ? n * 1 + 1 : chats + 1);
  // };
  // console.log(chats);
  const handel = async (ele) => {
    // console.log(ele._id);
    // handelz(ele.likes);
    // const filter = tour.filter((tour) => {
    //   if (ele._id === tour._id) {
    //     tour.likes = ele.likes * 1 + 1;
    //   }
    // });
    // settour(filter);

    try {
      const res = await axios.put(
        "http://127.0.0.1:8800/api/posts/" + ele._id,
        { likes: ele.likes * 1 + 1 }
      );
      console.log(res.data);
      // settour(res.data);
    } catch (err) {
      console.log(err);
    }
    // setchat(!chat);
  };
  const poster = async () => {
    console.log(chats);
    const newpost = {
      userId: 1234567896,
      img: "http://localhost:3000/img/pin.png",
      desc: chats,
      likes: tour.length,
    };
    try {
      const res = await axios.post("http://127.0.0.1:8800/api/posts/", newpost);
      // res.data
      console.log(res.data);
      // settour(res.data);
    } catch (err) {
      console.log(err);
    }
    setchat(!chat);
  };
  const handelrating = async (ele) => {
    try {
      const res = await axios.put(
        "http://127.0.0.1:8800/api/posts/" + ele._id,
        { rating: ele.rating * 1 + 1 }
      );
      console.log(res.data);
      // settour(res.data);
    } catch (err) {
      console.log(err);
    }
    setchat(!chat);
  };
  // console.log(tour);
  return (
    <div>
      {/* <img src="./goku.png" height="100px" width="100px" alt="" />{" "} */}
      <div className="threecontain">
        <div className="topbar">
          <input className="search" type="text" placeholder="search" />
          <div className="pro-boxes">
            {" "}
            <div className="profileboxs"></div>{" "}
            <div className="profileboxs"></div>{" "}
            <div className="profileboxs"></div>
          </div>
          <div className="profilebox"></div>
        </div>
        <div className="maincontainer">
          {" "}
          {/* <div className="middle-contain"> */}
          <div className="left-main">
            <div className="left">
              <div className="lefttop">
                {" "}
                {tour.map((ele) => {
                  return (
                    <div key={ele._id}>
                      <div className="ff" href="#">
                        {" "}
                        {ele ? ele.game : "FF"}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="lefttop">
                {" "}
                <div className="ff" href="#">
                  {" "}
                  @kingdomoffreefire
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="middle-mains">
            <div className="middle-contain">
              <div className="middle">
                {/* <div className="middle-views"></div>
                <div className="middle-views"></div> */}
                <ul>
                  {" "}
                  {tour.map((ele) => {
                    return (
                      <div key={ele._id} className="middle-views">
                        <div className="middle-img-box">
                          {" "}
                          <img className="middle-img" src={ele.img} alt="img" />
                        </div>

                        <div className="desc-box">
                          <div className="desc">
                            {" "}
                            {ele.desc
                              ? ele.desc
                              : "this image belongs to moutains in night.in this image water falling forom the sky,ttthe is of colour blue humans are lloving birds are chirping this plesant envirnoment this image belongs to moutains in night.in this image water falling forom the sky,ttthe is of colour blue humans are lloving birds are chirping this plesant envirnoment"}
                          </div>
                          <div className="middle-middle">
                            {" "}
                            <div>
                              <div className="likes">LIKES</div>
                              <div
                                className="likes"
                                color="red"
                                onClick={() => arz(ele)}
                              >
                                {" "}
                                {ele.likes ? ele.likes : "0"}
                              </div>
                            </div>
                            <div>
                              {" "}
                              <div className="likes">RATING</div>
                              <div
                                color="red"
                                className="rating like"
                                onClick={() => handelrating(ele)}
                              >
                                {ele.rating ? ele.rating : "0"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </ul>
              </div>{" "}
            </div>
            <div className="middle-contains">
              <input
                className="post-input"
                onChange={(e) => setchats(e.target.value)}
                type="text-area"
                value={chats}
                placeholder="add your description here to post "
              />
              <button className="post-bar" onClick={poster}>
                {" "}
                post
              </button>

              <button className="post-bar" onClick={arz}>
                {" "}
                update
              </button>
            </div>
          </div>
          <div className="right">
            <div className="right-bar"></div>
            <div className="right-bar"></div>
            <div className="right-bar"></div>
            <div className="right-bar"></div> <div className="right-bar"></div>
            <div className="right-bar"></div>
            <div className="right-bar"></div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
export default Imager;
