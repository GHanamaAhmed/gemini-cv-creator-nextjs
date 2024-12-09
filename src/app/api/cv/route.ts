import { generateCVContentWithTemplate2 } from "@/lib/googleClient";
import { takeScreenshot } from "@/lib/puppeteer";
import { NextRequest, NextResponse } from "next/server";

// route nextjs
export async function POST(req: NextRequest) {
  const {
    fullName,
    contact,
    education,
    experience,
    profession,
    skills,
  }: {
    fullName: string;
    profession: string;
    skills: string;
    experience: string;
    education: string;
    contact: string;
  } = await req.json();
  console.log(fullName, contact, education, experience, profession, skills);
  const skillsArray = skills.split(",");
  const template = `
      <div class="container">
        <div class="header">
          <div class="full-name">
            <span class="first-name">John</span>
            <span class="last-name">Doe</span>
          </div>
          <div class="contact-info">
            <span class="email">Email: </span>
            <span class="email-val">john.doe@gmail.com</span>
            <span class="separator"></span>
            <span class="phone">Phone: </span>
            <span class="phone-val">111-222-3333</span>
          </div>

          <div class="about">
            <span class="position">Front-End Developer </span>
            <span class="desc">
              I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.
            </span>
          </div>
        </div>
         <div class="details">
          <div class="section">
            <div class="section__title">Experience</div>
            <div class="section__list">
              <div class="section__list-item">
                <div class="left">
                  <div class="name">KlowdBox</div>
                  <div class="addr">San Fr, CA</div>
                  <div class="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div class="right">
                  <div class="name">Fr developer</div>
                  <div class="desc">did This and that</div>
                </div>
              </div>
                      <div class="section__list-item">
                <div class="left">
                  <div class="name">Akount</div>
                  <div class="addr">San Monica, CA</div>
                  <div class="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div class="right">
                  <div class="name">Fr developer</div>
                  <div class="desc">did This and that</div>
                </div>
              </div>

            </div>
          </div>
          <div class="section">
            <div class="section__title">Education</div>
            <div class="section__list">
              <div class="section__list-item">
                <div class="left">
                  <div class="name">Sample Institute of technology</div>
                  <div class="addr">San Fr, CA</div>
                  <div class="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div class="right">
                  <div class="name">Fr developer</div>
                  <div class="desc">did This and that</div>
                </div>
              </div>
              <div class="section__list-item">
                <div class="left">
                  <div class="name">Akount</div>
                  <div class="addr">San Monica, CA</div>
                  <div class="duration">Jan 2011 - Feb 2015</div>
                </div>
                <div class="right">
                  <div class="name">Fr developer</div>
                  <div class="desc">did This and that</div>
                </div>
              </div>

            </div>

        </div>
           <div class="section">
            <div class="section__title">Projects</div>
             <div class="section__list">
               <div class="section__list-item">
                 <div class="name">DSP</div>
                 <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
               </div>

               <div class="section__list-item">
                          <div class="name">DSP</div>
                 <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
                 </div>
               </div>
             </div>
          </div>
           <div class="section">
             <div class="section__title">Skills</div>
             <div class="skills">
               <div class="skills__item">
                 <div class="left"><div class="name">
                   Javascript
                   </div></div>
                 <div class="right">
                                <input  id="ck1" type="checkbox" checked/>

                   <label for="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>

                    <label for="ck2"></label>
                               <input id="ck3" type="checkbox" />

                    <label for="ck3"></label>
                                 <input id="ck4" type="checkbox" />
                  <label for="ck4"></label>
                                <input id="ck5" type="checkbox" />
                    <label for="ck5"></label>

                 </div>
               </div>

             </div>
             <div class="skills__item">
                 <div class="left"><div class="name">
                   CSS</div></div>
                 <div class="right">
                                <input  id="ck1" type="checkbox" checked/>

                   <label for="ck1"></label>
                                <input id="ck2" type="checkbox" checked/>

                    <label for="ck2"></label>
                               <input id="ck3" type="checkbox" />

                    <label for="ck3"></label>
                                 <input id="ck4" type="checkbox" />
                  <label for="ck4"></label>
                                <input id="ck5" type="checkbox" />
                    <label for="ck5"></label>

                 </div>
               </div>

             </div>
           <div class="section">
           <div class="section__title">
             Interests
             </div>
             <div class="section__list">
               <div class="section__list-item">
                        Football, programming.
                </div>
             </div>
           </div>
           </div>
        </div>
      </div>`;
  const res = await generateCVContentWithTemplate2(
    fullName,
    profession,
    skillsArray,
    experience,
    education,
    contact,
    template
  );
  //   // const text = htmlToSend(res) as string;
  await takeScreenshot("template1", res);
  return NextResponse.json({ success: true });
}
