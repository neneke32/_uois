import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { TeacherSmall } from 'usersgroups/components/links';

export const TeacherTasks = (props) => {
    const { user } = props
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Úkoly
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col md={12}>
                    <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Termín</td>
                                    <td>Zadavatel</td>
                                    <td>Popis</td>
                                    <td>Odkaz</td>
                                    <td>.</td>
                                    <td>Nástroje</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>4523</td>
                                    <td>17.11.2022</td>
                                    <td><TeacherSmall user={user} /></td>
                                    <td>Naplánovat předmět Bezpečnost</td>
                                    <td><a href={""}>Plánování</a></td>
                                    <td>.</td>
                                    <td><a className="btn btn-sm btn-outline-success">Splněno</a></td>
                                </tr>
                                <tr>
                                    <td>4523</td>
                                    <td>17.11.2022</td>
                                    <td><TeacherSmall user={user} /></td>
                                    <td>Naplánovat předmět Bezpečnost</td>
                                    <td><a href={""}>Plánování</a></td>
                                    <td>.</td>
                                    <td><a className="btn btn-sm btn-outline-success">Splněno</a></td>
                                </tr>
                            </tbody>
                        </table>
                        </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
