"use client"

import React from 'react'
import { Navbar } from '../components/Navbar'
import CipherTabs from './CipherTabs'
import Menubar from '../components/Menubar'

export default function CaesarRoute() {

    return (
        <>
            <Navbar />
            <Menubar />
            <h1 className="flex justify-center mb-10 mt-[40px] text-3xl font-bold">Caesar Cipher</h1>
            <CipherTabs />
            <div className="absolute inset-x-0 bottom-0 ...">
                <h6 className="flex justify-end mb-5 mr-10 text-sm">Copyright © Cipherology 2024. All Right Reserved.</h6>
            </div>

        </>
    )
}
