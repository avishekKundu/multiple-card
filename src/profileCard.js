import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <li className="list-group-item listItem">
                <div class="card itemCard">
                    <img src={this.props.img} class="card-img-top listImg" alt="Not Found" />
                    <div class="card-body itemBody">
                        <h5 class="card-title">{this.props.name}</h5>
                        <p class="card-text">E-Mail: {this.props.email}</p>
                        <p class="card-text">Contact: {this.props.contact}</p>
                        <button className="btn btn-outline-primary">
                            <a href={this.props.link} className="nav-link">CHECK PROFILE</a>
                        </button>
                        <div className="container mt-2 p-2 m-auto d-flex justify-content-between">
                            <a href={this.props.link} className="iconLink">
                                Icon
                            </a>
                            <a href={this.props.link} className="iconLink">
                                Icon
                            </a>
                            <a href={this.props.link} className="iconLink">
                                Icon
                            </a>
                            <a href={this.props.link} className="iconLink">
                                Icon
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default Profile;