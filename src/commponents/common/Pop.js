import { forwardRef, useImperativeHandle, useState } from "react";

const Pop = forwardRef(({ children }, ref) => {
    const [Open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),
        };
    });

    return (
        <>
            {Open && (
                <div className="pop">
                    {children}
                    <span className="btnClose">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/close.png`}
                            alt="closebutton"
                            onClick={() => {
                                setOpen(false);
                                document.body.classList.remove(
                                    "stop-scrolling"
                                );
                            }}
                        />
                    </span>
                </div>
            )}
        </>
    );
});

export default Pop;
