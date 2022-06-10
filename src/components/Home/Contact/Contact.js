import React, { useRef } from 'react';
import dipta from '../../../images/dipta.jpeg'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const serviceId = "service_6u5ieto";
    const templateId = "template_kei5jvl";
    const publicKey = "KEo7hx9Os4EX8G5tJ";
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            )
                .then(function (response) {
                    toast("Successfully send")
                    event.target.reset()
                }, function (error) {
                    console.log('FAILED...', error);
                });

        } catch (e) {
            console.log(e);
        }

    }
    return (
        <div className='max-w-7xl mx-auto py-12 px-5' id='contact'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <h4 className='font-bold text-6xl'>Contact Me</h4>
                    <p className='mt-5 text-lg'>I am available for work. Connect with me via phone: +8801613146412 or email: diptasaha.lpu.cse@gmail.com</p>

                    <div>
                        <div className="card-body p-0 mt-5">
                            <form onSubmit={formSubmitHandler}>
                                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Name" required className="input focus:outline-primary input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" required className="input focus:outline-primary input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Subject" name='subject' required className="input focus:outline-primary input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea placeholder='Message' required name='message' className='border p-4 rounded-lg focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-2' rows="5"></textarea>
                                </div>

                                <input className='btn mt-5 btn-primary' type="submit" value='Send' />

                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex justify-center'>
                        <img src={dipta} className="lg:max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>

            </div>
            <ToastContainer />

        </div>
    );
};

export default Contact;