import React from 'react';
import dipta from '../../../images/dipta.jpeg'
const Contact = () => {
    return (
        <div className='max-w-7xl mx-auto py-12 px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <h4 className='font-bold text-6xl'>Contact Me</h4>
                    <p className='mt-5 text-lg'>I am available for work. Connect with me via phone: +8801613146412 or email: diptasaha.lpu.cse@gmail.com</p>

                    <div>
                        <div className="card-body p-0 mt-5">
                            <div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" className="input focus:outline-primary input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input focus:outline-primary input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Subject" className="input focus:outline-primary input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea placeholder='Message' className='border p-4 rounded-lg focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-2' rows="5"></textarea>
                                </div>

                                <button className="btn mt-5 btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <img src={dipta} class="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Contact;