import NavigationBar from "../Components/Header & Footer/NavBar";
import { Container, Table } from "react-bootstrap";

function Home() {
  return (
    <div>
      {/* <NavigationBar /> */}
      <Container className="pt-5">
        <div
          className="d-flex align-items-center justify-content-center flex-grow-1 bg-secondary"
          style={{ height: "30vh" }}
        >
          <h1 className="text-center text-light text-uppercase display-1 fw-bold">
            THE GENERICS
          </h1>
        </div>
        <h2 className="text-center mt-5 mb-3">HOME PAGE</h2>
        <Table bordered striped hover responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>City, State</th>
              <th>Venue</th>
              <th>Ticket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JUL 16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <a href="#">BUY TICKETS</a>
              </td>
            </tr>
            <tr>
              <td>JUL 19</td>
              <td>TORONTO, ON</td>
              <td>BUDWEISER STAGE</td>
              <td>
                <a href="#">BUY TICKETS</a>
              </td>
            </tr>
            <tr>
              <td>JUL 22</td>
              <td>BRISTOW, VA</td>
              <td>JIGGY LUBE LIVE</td>
              <td>
                <a href="#">BUY TICKETS</a>
              </td>
            </tr>
            <tr>
              <td>JUL 29</td>
              <td>PHOENIX, AZ</td>
              <td>AK-CHIN PAVILION</td>
              <td>
                <a href="#">BUY TICKETS</a>
              </td>
            </tr>
            <tr>
              <td>AUG 2</td>
              <td>LAS VEGAS, NV</td>
              <td>T-MOBILE ARENA</td>
              <td>
                <a href="#">BUY TICKETS</a>
              </td>
            </tr>
            <tr>
              <td>AUG 7</td>
              <td>CONCORD, CA</td>
              <td>CONCORD PAVILION</td>
              <td>
                <a href="#">BUY TICKETS</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
export default Home;
