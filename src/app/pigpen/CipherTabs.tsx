"use client"

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DecipherCard } from './DecipherCard'
import { CipherCard } from './CipherCard'


const CipherTabs = () => {

    return (
        <div className="flex justify-center ...">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList className='container mx-auto'>
                    <TabsTrigger value="account" className='container mx-auto'>Encipher</TabsTrigger>
                    <TabsTrigger value="password" className='container mx-auto'>Decipher</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <CipherCard />
                </TabsContent>
                <TabsContent value="password">
                    <DecipherCard />
                </TabsContent>
            </Tabs>
        </div>

    )
}

export default CipherTabs