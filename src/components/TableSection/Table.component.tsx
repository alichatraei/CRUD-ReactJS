import { useState } from 'react'
import { Table, Container, Row, Button } from 'react-bootstrap'
import { VerticalModal } from '../VerticalModal/VerticalModal.component'
import './TableSection.styles.css'
type TTableSection = {
    data: any;
    setData: any
}
export const TableSection: React.FC<TTableSection> = ({ data, setData }) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Container fluid className="table">
            <Row>
                <Table striped bordered hover className="m-3 text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? data.map((item: any, index: any) => <><tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.lastName}</td>
                            <td>{item.username}</td>
                            <td>
                                <div className="actions d-flex justify-content-around">
                                    <Button variant="outline-danger" onClick={() => {
                                        setData(data.filter((item: any, itemNumber: any) => {
                                            return itemNumber !== index
                                        }))
                                    }}>Delete</Button>
                                    <Button variant="outline-info" onClick={() => {
                                        setModalShow(true)
                                    }}>Edit</Button>
                                </div>
                            </td>
                            <VerticalModal show={modalShow}
                                onHide={() => setModalShow(false)} headerTitle={"Edit Data"}
                                item={item} index={index} Edit={true} data={data} setData={setData} />
                        </tr></>) : null}
                    </tbody>
                </Table>
            </Row>
        </Container >
    );
}