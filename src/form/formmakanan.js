import React, { Component } from 'react'

export default class formmakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pesanan : "",
            jumlah : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeJumlah = this.handleChangeJumlah.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.pesanan = React.createRef();
    }

    handleChange(e) {
        this.setState({
            pesanan : e.target.value
        })
    }

    handleChangeJumlah(e) {
        this.setState({
            jumlah : e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(
            "Pesanan Anda adalah: " + this.state.pesanan
            + " | Jumlah Pesanan: " + this.state.jumlah
        )
        this.setState({
            pesanan : "",
            jumlah : ""            
        })
        this.pesanan.current.focus()
    }

    render() {
        return (
            <div>
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                        type="text"
                        placeholder="Masukkan Pesanan Anda"
                        ref={this.pesanan}
                        value={this.state.pesanan}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="number"
                        placeholder="Masukkan Jumlah Pesanan"
                        value={this.state.jumlah}
                        onChange={this.handleChangeJumlah}
                    />
                    <br/>
                    <br/>
                    <input type="submit" value="Pesan"/>
                    </form>
                    
                </center>
            </div>
        )
    }
}
