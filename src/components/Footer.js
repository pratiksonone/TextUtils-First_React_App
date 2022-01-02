import React from 'react'

export default function Footer(props) {
    return (
        <>

            <footer className={`page-footer fixed- font-small bg-${props.mode === 'dark' ? 'dark' : 'light'}`}>

                {/* <hr /> */}
                {/* <div className='container '>

                    <div className='row '>
                        <div className='col-3 '>follow us at --></div>
                        <div className='col-3  '>
                            <i className="fab fa-instagram d-flex align-items-center justify-content-center m-3 ">_unique_piece_</i>
                            <i className="fab fa-facebook d-flex align-items-center justify-content-center m-3">_unique_piece_</i>

                        </div>
                        <div className='col-3 '>
                            <i className="fab fa-twitter d-flex align-items-center justify-content-center m-3">_unique_piece_</i>
                            <i className="fab fa-telegram d-flex align-items-center justify-content-center m-3">_unique_piece_</i>
                        </div>
                    </div>

                </div> */}
                <hr className='m-0' />
                <div className={`footer-copyright text-center text-${props.mode === 'light' ? 'dark' : 'white'} py-1`}><i class="fas fa-copyright fs-6"></i> Copyright <i class="fas fa-at"></i> Pratik Sonone </div>
            </footer>
        </>
    )
}
