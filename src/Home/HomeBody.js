import React from "react";

import { Button } from "react-bootstrap";

function HomeBody() {
  return (
    <div>
      <div style={{ marginLeft: "200px" ,marginBottom:'25px'}}>
        <table >
          <tr  style={{borderBottom:'0.5px solid black'  }}>
            <th>JUL16</th>
            <span style={{ marginLeft: "30px" }}>
              <th>DETROIT</th>
            </span>
            <span style={{ marginLeft: "50px" }}>
              <th> MI DTE ENERGY MUSIC THEATRE</th>
            </span>
            <spna style={{ marginLeft: "200px" }}>
              {" "}
              <th>
                <Button variant="info">BUY TICKETS</Button>
              </th>
            </spna>
          </tr>

          <tr  style={{borderBottom:'0.5px solid black'}}>
            <th>JUL19,</th>
            <span style={{ marginLeft: "30px" }}>
              <th>TORONTO</th>
            </span>
            <span style={{ marginLeft: "50px" }}>
              <th>ON BUDWEISER STAGE</th>
            </span>
            <spna style={{ marginLeft: "266px" }}>
              {" "}
              <th>
                <Button variant="info">BUY TICKETS</Button>
              </th>
            </spna>
          </tr>

          <tr  style={{borderBottom:'0.5px solid black'}}>
            <th>JUL 22,</th>
            <span style={{ marginLeft: "30px" }}>
              <th>BRISTOW</th>
            </span>
            <span style={{ marginLeft: "50px" }}>
              <th> VA JIGGY LUBE LIVE</th>
            </span>
            <spna style={{ marginLeft: "295px" }}>
              {" "}
              <th>
                <Button variant="info">BUY TICKETS</Button>
              </th>
            </spna>
          </tr>

          <tr  style={{borderBottom:'0.5px solid black'}}>
            <th>JUL 29,</th>
            <span style={{ marginLeft: "30px" }}>
              <th>PHOENIX</th>
            </span>
            <span style={{ marginLeft: "50px" }}>
              <th> AZ AK-CHIN PAVILION</th>
            </span>
            <span style={{ marginLeft: "276px" }}>
              {" "}
              <th>
                <Button variant="info">BUY TICKETS</Button>
              </th>
            </span>
          </tr>

          <tr  style={{borderBottom:'0.5px solid black'}}>
            <th>AUG 2,</th>
            <span style={{ marginLeft: "30px" }}>
              <th>LAS VEGAS</th>
            </span>
            <span style={{ marginLeft: "50px" }}>
              <th> T-MOBILE ARENA</th>
            </span>
            <spna style={{ marginLeft: "300px" }}>
              {" "}
              <th>
                <Button variant="info">BUY TICKETS</Button>
              </th>
            </spna>
          </tr>

          <tr  style={{borderBottom:'0.5px solid black'}}>
            <th>AUG 7,</th>
            <span style={{ marginLeft: "30px" }}>
              <th>CONCORD</th>
            </span>
            <span style={{ marginLeft: "50px" }}>
              <th>CONCORD PAVILION</th>
            </span>
            <spna style={{ marginLeft: "283px" }}>
              {" "}
              <th>
                <Button variant="info">BUY TICKETS</Button>
              </th>
            </spna>
          </tr>

        </table>
      </div>
    </div>
  );
}

export default HomeBody;