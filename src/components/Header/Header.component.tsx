import { useState, FC, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import './Header.styles.css';
import { VscSearch } from 'react-icons/vsc';
import { GrAddCircle } from 'react-icons/gr';
import { VerticalModal } from '../VerticalModal/VerticalModal.component'
type THeader = {
    inputText: string,
    setData: any;
    data: any
}
export const Header: FC<THeader> = ({ inputText, setData, data }) => {
    const [modalShow, setModalShow] = useState(false);
    const [filter, setFilter] = useState('')
    useEffect(() => {
        setData(data.map((item: any) => item['name'].toLowerCase().includes(filter.toLowerCase()) ? item : false))
    }, [filter])
    return (
        <header className="d-flex align-items-center">
            <Container>
                <Row>
                    <div id="inputBox" className="px-2 d-flex align-items-center mx-auto">
                        <input type="text" placeholder={inputText} onChange={(e) => { setFilter(e.target.value) }} />
                        <VscSearch style={{ color: "#ccc", fontSize: "1.5rem" }} />
                    </div>
                </Row>
                <Row className="mt-4">
                    <div id="addButton" className="mx-auto">
                        <Button variant="success"
                            className="d-flex justify-content-around align-items-center"
                            onClick={() => setModalShow(true)}>
                            Add<GrAddCircle style={{ fontSize: "1.5rem" }} /></Button>
                    </div>
                    <VerticalModal show={modalShow}
                        onHide={() => setModalShow(false)} headerTitle={"Add a new values"}
                        setData={setData}
                        data={data}
                    />
                </Row>
            </Container>
        </header>)
}