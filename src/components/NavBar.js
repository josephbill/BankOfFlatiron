import React from "react";

export default function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Bank Menu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    <a class="nav-link" href="/add-transaction">Add Transaction</a>
                    <a class="nav-link" href="/edit-transaction">Edit Transaction</a>
                    <a class="nav-link" href="/about">About Us</a>
                </div>
                </div>
            </div>
        </nav>
    )
}