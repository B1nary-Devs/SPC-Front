import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import './index.css'


export default function ModalTermo({ open, onClose }){
    return(
        <div>
            
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal">
                    <div className="header">
                        <button className="btnClose">X</button>
                    </div>
                    <div>
                        <h3>TERMO DE USO E CONDIÇÕES - 15/09/2024</h3>
                    </div>
                    <div className="boxTermo">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.
                            crambled it to make .
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .
                        </p>
                    </div>
                    <hr/>
                    <div>
                        <input type="checkbox" id="termosOpcionais" name="termosOpcionais" />
                        <label for="termosOpcionais">Aceita receber nossa newsletter com novidades e ofertas exclusivas.</label>

                        <input type="checkbox" id="termosObrigatorio" name="termosObrigatorio" />
                        <label for="termosObrigatorio">Li e concordo com os termos</label>
                    </div>
                    <Button>Cadastrar</Button>
                </div>
            </Modal>

        </div>
    )
}