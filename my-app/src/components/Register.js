import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
    const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((props) => ({
          ...props,
          [name]: value,
        }));
      };

    const navigate = useNavigate();

    const handlesubmit = (e) => {
            e.preventDefault();
            const errors = {};
            if (!formData.firstName) {
            errors.firstName = 'First name is required';
            }
            if (!formData.lastName) {
            errors.lastName = 'Last name is required';
            }
            if (!formData.email) {
            errors.email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email address';
            }
            if (!formData.password) {
            errors.password = 'Password is required';
            } else if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
            }
            if (!formData.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
            } else if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = 'Passwords do not match';
            }
            setFormErrors(errors);
            if (Object.keys(errors).length === 0) {
            console.log(formData);
            fetch("http://localhost:8000/user", {
                            method: "POST",
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify(formData)
                        }).then((res) => {
                            console.log(formData);
                            toast.success('Registered successfully.')
                            navigate('/');

                        }).catch((err) => {
                            toast.error('Failed :' + err.message);
                        });
            }
    }
    return (
        <div>
            <div>
                <form className="container col-lg-6 " onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div>
                                    <div className="form-group">
                                        <label>First Name <span className="errmsg">*</span></label>
                                        <input  className="form-control"
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange} />
                                        {formErrors.firstName && <div className="errmsg">{formErrors.firstName}</div>}
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label>Last Name <span className="errmsg">*</span></label>
                                        <input  className="form-control"
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}/>
                                        {formErrors.lastName && <div className="errmsg">{formErrors.lastName}</div>}
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input 
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}/>
                                        {formErrors.email && <div className="errmsg">{formErrors.email}</div>}
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input  className="form-control"
                                                type="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}/>
                                        {formErrors.password && <div className="errmsg">{formErrors.password}</div>}
                                        
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label>Confirm password <span className="errmsg">*</span></label>
                                        <input  className="form-control"
                                                type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}/>
                                        {formErrors.confirmPassword && <div className="errmsg">{formErrors.confirmPassword}</div>}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer text-center">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <Link className="btn btn-success margin" to={'/login'}>Close</Link>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;