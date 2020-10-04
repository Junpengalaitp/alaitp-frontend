import React, {useState} from 'react';
import ImageModal from "../ImageModal";

const ImageWithModal = props => {
  const [modalShow, setModalShow] = useState(false)

  return (
    <div onClick={() => setModalShow(!modalShow)} style={{"cursor": "pointer"}}>
      <img src={props.img} alt=""/>
      <ImageModal img={props.img}
                  show={modalShow}
                  onHide={() => setModalShow(false)}/>
    </div>)
}


export default ImageWithModal;