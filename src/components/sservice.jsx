import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { BiPaint } from "react-icons/bi";
import { FaCode } from "react-icons/fa";

function Sservice() {
  return (
    <div
      className="p-2"
      style={{
        height: "100vh",
        color: "white",
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        className="my-4"
        style={{ color: "#2fa56e", textAlign: "center", fontWeight: "bolder" }}
      >
        Services
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row className="d-flex " style={{ justifyContent: "space-around" }}>
            <Col md="4">
              <Card
                className="m-1 p-2"
                style={{
                  background: "#80808038",
                  alignItems: "center",
                }}
              >
                <FaCode
                  style={{ height: "40px", width: "40px", color: "#2fa56e" }}
                />
                <h3>Web Development</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard{" "}
                </p>
                <div style={{ alignSelf: "center" }}>
                  <Button className="section-btn">Read More</Button>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card
                className="m-1 p-2"
                style={{
                  background: "#80808038",
                  alignItems: "center",
                }}
              >
                <BiPaint
                  style={{ height: "40px", width: "40px", color: "#2fa56e" }}
                />

                <h3>Web Development</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard{" "}
                </p>
                <div style={{ alignSelf: "center" }}>
                  <Button className="section-btn">Read More</Button>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card
                className="m-1 p-2"
                style={{
                  background: "#80808038",
                  alignItems: "center",
                }}
              >
                <FaCode
                  style={{ height: "40px", width: "40px", color: "#2fa56e" }}
                />

                <h3>Web Development</h3>
                <p style={{ textAlign: "center" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard{" "}
                </p>
                <div style={{ alignSelf: "center" }}>
                  <Button className="section-btn ">Read More</Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Sservice;

// import React from "react";
// import { Button, Card, Col, Row } from "react-bootstrap";
// import { BiPaint } from "react-icons/bi";
// import { FaCode } from "react-icons/fa";

// function Sservice() {
//   return (
//     <div
//       className="p-2"
//       style={{
//         height: "100vh",
//         color: "white",
//         background: "black",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <h2 className="my-3" style={{ color: "#2fa56e", textAlign: "center" }}>
//         Services
//       </h2>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Row className="d-flex " style={{ justifyContent: "space-around" }}>
//           <Col md="3" className="m-2">
//             <Card
//               className="p-2"
//               style={{
//                 background: "#80808038",
//                 alignItems: "center",
//               }}
//             >
//               <FaCode
//                 style={{ height: "40px", width: "40px", color: "#2fa56e" }}
//               />

//               <h3>Web Development</h3>
//               <p style={{ textAlign: "center" }}>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard{" "}
//               </p>
//               <div style={{ alignSelf: "center" }}>
//                 <Button className="section-btn">Read More</Button>
//               </div>
//             </Card>
//           </Col>
//           <Col md="3" className="m-2">
//             <Card
//               className="p-2"
//               style={{
//                 background: "#80808038",
//                 alignItems: "center",
//               }}
//             >
//               <BiPaint
//                 style={{ height: "40px", width: "40px", color: "#2fa56e" }}
//               />
//               <h3>Web Development</h3>
//               <p style={{ textAlign: "center" }}>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard{" "}
//               </p>
//               <div style={{ alignSelf: "center" }}>
//                 <Button className="section-btn">Read More</Button>
//               </div>
//             </Card>
//           </Col>
//           <Col md="3" className="m-2">
//             <Card
//               className="p-2"
//               style={{
//                 background: "#80808038",
//                 alignItems: "center",
//               }}
//             >
//               <BiPaint
//                 style={{ height: "40px", width: "40px", color: "#2fa56e" }}
//               />
//               <h3>Web Development</h3>
//               <p style={{ textAlign: "center" }}>
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard{" "}
//               </p>
//               <div style={{ alignSelf: "center" }}>
//                 <Button className="section-btn">Read More</Button>
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// }

// export default Sservice;
