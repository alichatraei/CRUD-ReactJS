import { ReactEventHandler, useState } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
type TVerticalModal = {
    show: boolean;
    onHide: Function;
    headerTitle: string;
    Edit?: boolean
    setData?: any;
    data?: any | [],
    item?: any,
    index?: number
}
export const VerticalModal: React.FC<TVerticalModal> =
    ({ show, onHide, headerTitle, setData, data, item, index, Edit = false }) => {
        const [values, setValues] = useState({
            name: '',
            lastName: '',
            username: ''
        })
        return (<>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {headerTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder={'Enter your name'}
                            aria-label="Name"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                setValues
                                    ({
                                        name: e.target.value, lastName: values.lastName,
                                        username: values.username
                                    })
                            }}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder={'Enter your familyname'}
                            aria-label="FamilyName"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                setValues
                                    ({
                                        name: values.name, lastName: e.target.value,
                                        username: values.username
                                    })
                            }}
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder={'Enter your username'}
                            aria-label="Username"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => {
                                setValues
                                    ({
                                        name: values.name,
                                        lastName: values.lastName,
                                        username: e.target.value
                                    })
                            }}
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    {Edit ? <> <Button onClick={() => {
                        if (values['name'] !== "" || values['lastName'] !== ""
                            || values['username'] !== "" && Edit)
                            setData(data.map((oldItem: any, indexNumber: any) => indexNumber === index ? { ...values } : oldItem));
                        (onHide()) as ReactEventHandler;
                    }}>Edit</Button></> : <> <Button onClick={() => {
                        if (values['name'] !== "" || values['lastName'] !== ""
                            || values['username'] !== "" && Edit === false)
                            setData([...data, { ...values }]);

                        (onHide()) as ReactEventHandler;
                    }}>Save</Button></>}

                </Modal.Footer>
            </Modal>
        </>)
    }

