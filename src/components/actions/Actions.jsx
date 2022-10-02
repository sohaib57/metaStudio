import { useContext, useEffect } from "react";
import ContextCanvas from "../../context/ContextCanvas";

const Actions = () => {
    const [canvas] = useContext(ContextCanvas)
    useEffect(() => {

        const deleteObject = () => {
            canvas.getActiveObjects().forEach(obj => {
                canvas.remove(obj);
            });
            canvas.discardActiveObject().renderAll();
        }
        return () => {
            deleteObject()
        }
    }, [canvas])


    return (
        <>
            {/* {deleteObject()} */}
        </>
    )
}

export default Actions
// export { deleteObject }











