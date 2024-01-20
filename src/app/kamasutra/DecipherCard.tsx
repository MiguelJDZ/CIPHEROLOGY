"use client"

import React, { useState } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Info } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


export const DecipherCard = () => {

    const [encryptedText, setEncryptedText] = useState('');
    const [shiftValue, setShiftValue] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const decrypt = () => {
        // Convert shiftValue to a number
        const shift = parseInt(shiftValue);

        if (isNaN(shift)) {
            // Handle the case where shiftValue is not a valid number
            console.error('Invalid shift value. Please enter a valid number.');

            return toast({
                title: "Oops, wrong shift key value!",
                description: "Make sure to use a shift value between 0 and 9.",
            });
        }

        let result = '';
        for (let i = 0; i < encryptedText.length; i++) {
            const charCode = encryptedText.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                // Uppercase letters
                result += String.fromCharCode(((charCode - 65 - shift) % 26 + 26) % 26 + 65);
            } else if (charCode >= 97 && charCode <= 122) {
                // Lowercase letters
                result += String.fromCharCode(((charCode - 97 - shift) % 26 + 26) % 26 + 97);
            } else {
                // Other characters (e.g., spaces, punctuation)
                result += encryptedText[i];
            }
        }
        setDecryptedText(result);
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Decipher your Ciphertext</CardTitle>
                    <CardDescription>Decipher the ciphertext using the caesar cipher algorithm.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="message-2">Ciphertext to Decipher
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Info className="w-3 h-3 ml-1" /></TooltipTrigger>
                                    <TooltipContent>
                                        <pre>
                                            REQUIRED! Must only contain letters from [A - Z].
                                        </pre>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Label>
                        <Textarea
                            placeholder="Type your ciphertext here."
                            id="message-2"
                            value={encryptedText}
                            onChange={(e) => setEncryptedText(e.target.value)}
                        />
                        <p className="text-sm text-muted-foreground">
                            Make sure to select a shift key to decipher the ciphertext.
                        </p>
                    </div>
                </CardContent>
                <CardContent>
                    <div className="grid w-full gap-1.5">
                        <Label htmlFor="message-3">Shift Key
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><Info className="w-3 h-3 ml-1" /></TooltipTrigger>
                                    <TooltipContent>
                                        <pre>
                                            REQUIRED! Must only contain numbers from [1 - 9].
                                        </pre>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </Label>
                        <Input
                            type="number"
                            value={shiftValue}
                            onChange={(e) => setShiftValue(e.target.value)}
                            min={0}
                            max={25}
                        />
                    </div>
                </CardContent>
                <CardContent>
                    <div className="grid w-full gap-1.5">
                        <Button onClick={decrypt} type="submit" className="mt-4 w-full">
                            Decipher Ciphertext
                        </Button>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="grid w-full gap-1.5">
                        <Label>Result:</Label>
                        <p>{decryptedText}</p>
                    </div>
                </CardFooter>
            </Card>

        </>
    )
}
