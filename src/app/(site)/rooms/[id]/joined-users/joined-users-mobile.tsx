'use client';

import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

export const JoinedUsersMobile: FC<{ setShowMobileUsers: Dispatch<SetStateAction<boolean>> }> = ({
    setShowMobileUsers
}) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (divRef.current && !divRef.current.contains(event.target as Node)) {
                setShowMobileUsers(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={divRef}
            className="bg-white max-w-[220px] w-full mt-[76px] mb-[30px] text-center rounded-2xl absolute block lg:hidden right-[30px] z-10 h-[80%] border border-slate-200  border-solid bg-popover"
            onBlur={() => {
                console.log('==blur');
                setShowMobileUsers(false);
            }}
            tabIndex={0}>
            <div
                className="absolute top-[10px] right-[10px] cursor-pointer"
                onClick={() => setShowMobileUsers(false)}>
                <IoClose size={20} />
            </div>
            <div className="mt-3">Joined User</div>
        </div>
    );
};