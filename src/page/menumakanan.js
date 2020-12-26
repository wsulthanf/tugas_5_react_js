import React, { Component } from 'react'
import DaftarMakanan from '../lib/daftarmakanan'
import FormMakanan from '../form/formmakanan'

const listMakanan = [
    {
        namaMakanan: "Nasi Padang",
        harga: "20.000"
    },
    {
        namaMakanan: "Sate",
        harga: "20.000"
    },
    {
        namaMakanan: "Soto",
        harga: "10.000"
    },
    {
        namaMakanan: "Uduk",
        harga: "10.000"
    },
    {
        namaMakanan: "Nasi Kuning",
        harga: "15.000"
    },
    {
        namaMakanan: "Ayam Geprek",
        harga: "15.000"
    },
    {
        namaMakanan: "Pecel Lele",
        harga: "15.000"
    },
    {
        namaMakanan: "Pecel",
        harga: "10.000"
    },
    {
        namaMakanan: "Mie Ayam",
        harga: "10.000"
    }
]

export default class menumakanan extends Component {
    render() {
        return (
            <div>
                <h3>Daftar Makanan Favorit</h3>
                <table>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((data, index) => {
                                return (
                                    <td key={index}>
                                        <img 
                                        src={data.img} 
                                        alt="Product Makanan"
                                        width="150"
                                        height="100"
                                        />
                                        <center>
                                            <p>
                                                {data.namaMakanan}
                                            </p>
                                            <p>
                                                Harga Rp. {data.harga}
                                            </p>
                                        </center>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>

                <h4>List Makanan</h4>
                {listMakanan.map((data, index) => {
                    return (
                        <div key={index}>
                            <p>
                                {data.namaMakanan} | Harga {data.harga}
                            </p>
                        </div>
                    )
                })}
                <FormMakanan />
            </div>
        )
    }
}
