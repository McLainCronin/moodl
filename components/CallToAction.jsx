'use client'
import React from 'react'
import Button from './Button'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext';


export default function CallToAction() {
    const { currentUser } = useAuth();

    console.log('Current User:', currentUser);

    if (currentUser) {
        return (
            <div className="max-w-[600px] w-full mx-auto">
            <Link href='/dashboard'>
                <Button dark full text="Go to dashboard"/>
            </Link>
        </div>
        )
    }
    return (
        <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Link href='/dashboard'>
            <Button text="Sign Up"/>
        </Link>
        <Link href='/dashboard'>
            <Button text="Login" dark/>
        </Link>
    </div>
    )
}
