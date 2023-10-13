import React from "react";
// import "../Component/Section3.css";
// import "../Component/Section3Media.css";
import backgroundpng from "./Section3-Images/backgroundpng.png";
import ajith from "./Section3-Images/Persons/ajith.jpg";
import anshid from "./Section3-Images/Persons/ans.jpg";
import sarath from "./Section3-Images/Persons/SARATH.jpg";
import niyas from "./Section3-Images/Persons/NIYAS.jpg";
import sinsar from "./Section3-Images/Persons/SINSAR.jpg";
import farhan from "./Section3-Images/Persons/FARHAN.jpg";
import appu from "./Section3-Images/Persons/APPUS.jpg";
import ansil from "./Section3-Images/Persons/ansil.jpg";
import fahad from "./Section3-Images/Persons/fahad.jpg";
import sarathlal from "./Section3-Images/Persons/sarathlal.jpg";
import mishab from "./Section3-Images/Persons/mishab.jpg";
import priya from "./Section3-Images/Persons/priya.jpg";
import akhil from "./Section3-Images/Persons/akhil.jpg";
import jonish from "./Section3-Images/Persons/jonish.jpg";
import mridhu from "./Section3-Images/Persons/mridhu.jpg";
import naseef from "./Section3-Images/Persons/naseef.jpg";
import "./Team.css";
import "./Section3Media.css";
import { Navbarpage } from "../../frontpage/Navbar/Navbarpage";

const Team = () => {
  return (
    <>
      <Navbarpage />

      <div className="Section3-FullDiv">
        {/* MaincontainerforAbsolute=============================================================== */}

        <div className="Section3-Mainbackgroundpng">
          <img className="section3-backgroundpng" src={backgroundpng} alt="" />
        </div>

        {/* roundpng===================================================================== */}
        <div className="Section3-Mainbackgroundroundpng">
          <img
            className="section3-backgroundroundpng"
            src="https://media-public.canva.com/bvbOU/MAEiwUbvbOU/1/s.png"
            alt=""
          />
        </div>

        {/* noodlepng===================================================================== */}
        <div className="Section3-Mainbackgroundnoodlepng">
          <img
            className="section3-backgroundnoodlepng"
            src="https://media-public.canva.com/SRUxQ/MAEiwfSRUxQ/1/t.png"
            alt=""
          />
        </div>

        {/* mainheading======================================================================= */}

        <div className="Section3-Ourtext">
          <span className="Section3-ourstyle">Our Tech Team</span>
        </div>

        {/* subtext=========================================================================== */}
        <div className="Section3-Meettext">
          <span className="Section3-Meetstyle">
            "Meet Our Expertise in Technology and Innovation"
          </span>
        </div>

        {/* cards================================================================================== */}

        <div className="section3-fullcardin1">
          <div className="section3-firstrowccard">
            <div className="section3-firstrowcardfirstbox">
              {/* shafanikka =================================================================================*/}
              <div className="Section3-card1">
                <div className="section3-imagediv">
                  <div className="Section3-cardimage">
                    <img
                      className="Section3-personimage"
                      src="https://media.licdn.com/dms/image/D5603AQGmAlGbDlZBjA/profile-displayphoto-shrink_800_800/0/1673605030008?e=2147483647&v=beta&t=SfVrzqgd_RAI52-8uu364Yt6HLM8ff_WYUpmrujMS64"
                      alt=""
                    />
                  </div>
                </div>
                <div className="Section3-cardname">
                  <span className="Section3-cardpersonName">Muhammed</span>
                  <span className="Section3-cardpersonName">Shafan</span>
                </div>
                <div className="Section3-cardposition">
                  <span className="Section3-cardpersonposition">
                    Chief Executive Officer
                  </span>
                </div>
              </div>
            </div>
            {/* secondrow ===========================================================================*/}
            <div className="section3-cardsecondbox">
              <div className="section3-cardsecondbox1strow">
                {/* ansil===================================================================== */}
                <div className="section3-cardsecondboxfirstcardupdate">
                  <div className="section3-cardsecondboximagediv">
                    <div className="section3-cardsecondboximageround">
                      <img
                        className="section3-cardsecondboximage"
                        src={appu}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="section3-cardsection2boxfirstrole">
                    <div className="section3-cardsecondboxfirstname">
                      <span className="section3-cardsecondname">
                      Appu
                      </span>
                    </div>
                    <div className="section3-cardsecondboxfirstrole">
                      <span className="section3-cardsecondrole">
                        Product Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* mridhu======================================== */}
                <div className="section3-cardsecondboxfirstcardsmall">
                  <div className="section3-cardsecondboximagedivsmall">
                    <div className="section3-cardsecondboximageroundsmall">
                      <img
                        className="section3-cardsecondboximagesmall"
                        src={mridhu}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="section3-cardsection2boxfirstrolesmall">
                    <div className="section3-cardsecondboxfirstnamesmall">
                      <span className="section3-cardsecondnamesmall">
                        Mridu
                      </span>
                    </div>
                    <div className="section3-cardsecondboxfirstrolesmall">
                      <span className="section3-cardsecondrolesmall">
                        Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section3-cardsecondbox2strow">
                {/* appu================================================================ */}
                <div className="section3-cardsecondboxfirstcardupdate">
                  <div className="section3-cardsecondboximagediv">
                    <div className="section3-cardsecondboximageround">
                      <img
                        className="section3-cardsecondboximage"
                        src={ansil}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="section3-cardsection2boxfirstrole">
                    <div className="section3-cardsecondboxfirstname">
                      <span className="section3-cardsecondnamesmall2">
                     Ansil
                      </span>
                    </div>
                    <div className="section3-cardsecondboxfirstrole">
                      <span className="section3-cardsecondrole">
                        Product Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* fahad========================================================================= */}
                <div className="section3-cardsecondboxfirstcardsmall">
                  <div className="section3-cardsecondboximagedivsmall">
                    <div className="section3-cardsecondboximageroundsmall">
                      <img
                        className="section3-cardsecondboximagesmall"
                        src={fahad}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="section3-cardsection2boxfirstrolesmall">
                    <div className="section3-cardsecondboxfirstnamesmall">
                      <span className="section3-cardsecondnamesmall">
                        Fahad
                      </span>
                    </div>
                    <div className="section3-cardsecondboxfirstrolesmall">
                      <span className="section3-cardsecondrolesmall">
                        Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* thirdrow=========================================================================== */}

          <div className="section3-thirdrowstart">
            <div className="section3-thirdrow1">
              {/* naseef========================================================================= */}
              <div className="section3-cardsecondboxfirstcardsmallupdate">
                <div className="section3-cardsecondboximagedivsmall">
                  <div className="section3-cardsecondboximageroundsmall">
                    <img
                      className="section3-cardsecondboximagesmall"
                      src={naseef}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrolesmall">
                  <div className="section3-cardsecondboxfirstnamesmall">
                    <span className="section3-cardsecondnamesmall">Naseef</span>
                  </div>
                  <div className="section3-cardsecondboxfirstrolesmall">
                    <span className="section3-cardsecondrolesmall">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* anshid================================================================ */}
              <div className="section3-cardsecondboxfirstcardpatch">
                <div className="section3-cardsecondboximagediv">
                  <div className="section3-cardsecondboximageround">
                    <img
                      className="section3-cardsecondboximage"
                      src={anshid}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrole">
                  <div className="section3-cardsecondboxfirstname">
                    <span className="section3-cardsecondnamesmall2">
                      Anshid KT
                    </span>
                  </div>
                  <div className="section3-cardsecondboxfirstrole">
                    <span className="section3-cardsecondrole">Developer</span>
                  </div>
                </div>
              </div>

              {/* Ajith========================================================================= */}
              <div className="section3-cardsecondboxfirstcardsmallpatch">
                <div className="section3-cardsecondboximagedivsmall">
                  <div className="section3-cardsecondboximageroundsmall">
                    <img
                      className="section3-cardsecondboximagesmall"
                      src={ajith}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrolesmall">
                  <div className="section3-cardsecondboxfirstnamesmall">
                    <span className="section3-cardsecondnamesmall">Ajith</span>
                  </div>
                  <div className="section3-cardsecondboxfirstrolesmall">
                    <span className="section3-cardsecondrolesmall">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section3-thirdrow2">
              {/* sarath========================================================================= */}
              <div className="section3-cardsecondboxfirstcardsmallupdate">
                <div className="section3-cardsecondboximagedivsmall">
                  <div className="section3-cardsecondboximageroundsmall">
                    <img
                      className="section3-cardsecondboximagesmall"
                      src={sarath}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrolesmall">
                  <div className="section3-cardsecondboxfirstnamesmall">
                    <span className="section3-cardsecondnamesmall">
                      Sarath Raj
                    </span>
                  </div>
                  <div className="section3-cardsecondboxfirstrolesmall">
                    <span className="section3-cardsecondrolesmall">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* farhan================================================================ */}
              <div className="section3-cardsecondboxfirstcardpatch">
                <div className="section3-cardsecondboximagediv">
                  <div className="section3-cardsecondboximageround">
                    <img
                      className="section3-cardsecondboximage"
                      src={farhan}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrole">
                  <div className="section3-cardsecondboxfirstname">
                    <span className="section3-cardsecondnamesmall2">
                      Farhan
                    </span>
                  </div>
                  <div className="section3-cardsecondboxfirstrole">
                    <span className="section3-cardsecondrole">Developer</span>
                  </div>
                </div>
              </div>

              {/* sinsar========================================================================= */}
              <div className="section3-cardsecondboxfirstcardsmallpatch">
                <div className="section3-cardsecondboximagedivsmall">
                  <div className="section3-cardsecondboximageroundsmall">
                    <img
                      className="section3-cardsecondboximagesmall"
                      src={sinsar}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrolesmall">
                  <div className="section3-cardsecondboxfirstnamesmall">
                    <span className="section3-cardsecondnamesmall">Sinsar</span>
                  </div>
                  <div className="section3-cardsecondboxfirstrolesmall">
                    <span className="section3-cardsecondrolesmall">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section3-thirdrow3">
              {/* niyas========================================================================= */}
              <div className="section3-cardsecondboxfirstcardsmallupdate">
                <div className="section3-cardsecondboximagedivsmall">
                  <div className="section3-cardsecondboximageroundsmall">
                    <img
                      className="section3-cardsecondboximagesmall"
                      src={niyas}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrolesmall">
                  <div className="section3-cardsecondboxfirstnamesmall">
                    <span className="section3-cardsecondnamesmall">Niyas</span>
                  </div>
                  <div className="section3-cardsecondboxfirstrolesmall">
                    <span className="section3-cardsecondrolesmall">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* Jonish================================================================ */}
              <div className="section3-cardsecondboxfirstcardpatch">
                <div className="section3-cardsecondboximagediv">
                  <div className="section3-cardsecondboximageround">
                    <img
                      className="section3-cardsecondboximage"
                      src={jonish}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrole">
                  <div className="section3-cardsecondboxfirstname">
                    <span className="section3-cardsecondnamesmall2">
                      Jonish
                    </span>
                  </div>
                  <div className="section3-cardsecondboxfirstrole">
                    <span className="section3-cardsecondrole">Developer</span>
                  </div>
                </div>
              </div>

              {/* Sarath========================================================================= */}
              <div className="section3-cardsecondboxfirstcardsmallpatch">
                <div className="section3-cardsecondboximagedivsmall">
                  <div className="section3-cardsecondboximageroundsmall">
                    <img
                      className="section3-cardsecondboximagesmall"
                      src={sarathlal}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrolesmall">
                  <div className="section3-cardsecondboxfirstnamesmall">
                    <span className="section3-cardsecondnamesmall">
                      Sarath Lal
                    </span>
                  </div>
                  <div className="section3-cardsecondboxfirstrolesmall">
                    <span className="section3-cardsecondrolesmall">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section3-thirdrow1">
              {/* priya========================================================================== */}
              <div className="section3-cardsecondboxfirstcardsmallupdate">
                <div className="section3-cardsecondboximagedivsmall">
                  <div className="section3-cardsecondboximageroundsmall">
                    <img
                      className="section3-cardsecondboximagesmall"
                      src={priya}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrolesmall">
                  <div className="section3-cardsecondboxfirstnamesmall">
                    <span className="section3-cardsecondnamesmall">Priya</span>
                  </div>
                  <div className="section3-cardsecondboxfirstrolesmall">
                    <span className="section3-cardsecondrolesmall">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* mishab================================================================ */}
              <div className="section3-cardsecondboxfirstcardpatch">
                <div className="section3-cardsecondboximagediv">
                  <div className="section3-cardsecondboximageround">
                    <img
                      className="section3-cardsecondboximage"
                      src={mishab}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrole">
                  <div className="section3-cardsecondboxfirstname">
                    <span className="section3-cardsecondnamesmall2">
                      Mishab
                    </span>
                  </div>
                  <div className="section3-cardsecondboxfirstrole">
                    <span className="section3-cardsecondrole">Developer</span>
                  </div>
                </div>
              </div>

              {/* akhil========================================================================= */}
              <div className="section3-cardsecondboxfirstcardsmallpatch">
                <div className="section3-cardsecondboximagedivsmall">
                  <div className="section3-cardsecondboximageroundsmall">
                    <img
                      className="section3-cardsecondboximagesmall"
                      src={akhil}
                      alt=""
                    />
                  </div>
                </div>

                <div className="section3-cardsection2boxfirstrolesmall">
                  <div className="section3-cardsecondboxfirstnamesmall">
                    <span className="section3-cardsecondnamesmall">Akhil</span>
                  </div>
                  <div className="section3-cardsecondboxfirstrolesmall">
                    <span className="section3-cardsecondrolesmall">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==================================================================mediaquery====-=================================================================================== */}
        <div className="section3-mediaqueryonlycard">
          <div className="section3-mediafirst3cards">
            {/* shafanikka ===================================================================*/}
            <div className="section3-mediafirstbigcard">
              <div className="section3-mediaimagediv">
                <div className="section3-mediaimageround">
                  <img
                    className="section3-mediaimage"
                    src="https://media.licdn.com/dms/image/D5603AQGmAlGbDlZBjA/profile-displayphoto-shrink_800_800/0/1673605030008?e=2147483647&v=beta&t=SfVrzqgd_RAI52-8uu364Yt6HLM8ff_WYUpmrujMS64"
                    alt=""
                  />
                </div>
              </div>
              <div className="section3-mediaseconddiv">
                <div className="section3-medianamediv">
                  <span className="section3-mediafirstcardname">Muhammed</span>
                  <span className="section3-mediafirstcardlastname">
                    Shafan
                  </span>
                </div>
                <span className="section3-mediafirstcardposition">
                  Chief Executive Officer
                </span>
              </div>
            </div>

            <div className="sectiono3-mediaothercard">
              {/* ansil=============================== */}

              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={ansil}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">
                      Muhammed Ansil
                    </span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Project Manager
                    </span>
                  </div>
                </div>
              </div>

              {/* mridhu=============================== */}

              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={mridhu}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Mridhu</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Project Manager
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* allothercards are here======================================================================================================= */}

          <div className="section3-mediaallothercardfulldiv">
            {/* appu==================================================================== */}

            <div className="section3-media2in1">
              {/* appu====================================================================== */}
              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={appu}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Appu</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Project Manager
                    </span>
                  </div>
                </div>
              </div>

              {/* fahad====================================================================== */}

              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={fahad}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Fahad</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="section3-media2in1">
              {/* naseef====================================================================== */}
              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src="https://e1.pxfuel.com/desktop-wallpaper/132/920/desktop-wallpaper-cristiano-ronaldo-hair-face-forehead-head-nose-hairstyle-chin-cheek-ear-jaw-ronaldo-hairstyle.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Naseef</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* Anshid====================================================================== */}

              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={anshid}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Anshid</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section3-media2in1">
              {/* ajith====================================================================== */}
              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={ajith}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Ajith</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* sarath====================================================================== */}

              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={sarath}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">
                      Sarath Raj
                    </span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section3-media2in1">
              {/* farhan====================================================================== */}
              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={farhan}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Farhan</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* sinsar====================================================================== */}

              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={sinsar}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Sinsar</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section3-media2in1">
              {/* niyas====================================================================== */}
              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={niyas}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Niyas</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* jonish====================================================================== */}

              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={jonish}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Jonish</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section3-media2in1">
              {/* sarathlal====================================================================== */}
              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={sarathlal}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">
                      Sarath Lal
                    </span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* priya====================================================================== */}

              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={priya}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Priya</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="section3-media2in1">
              {/* mishab====================================================================== */}
              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={mishab}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Mishab</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* akhil====================================================================== */}

              <div className="sectiono3-mediapersonalcard">
                <div className="sectiono3-mediapersonalcardimagediv">
                  <div className="section3-mediaeachimage">
                    <img
                      className="section3-mediaimageeach"
                      src={akhil}
                      alt=""
                    />
                  </div>
                </div>
                <div className="section3-medianamecommondiv">
                  <div className="section3-mediaeachname">
                    <span className="section3-medianameeachperson">Akhil</span>
                  </div>

                  <div className="section3-mediaeachrole">
                    <span className="section3-mediaeachpersonrole">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
