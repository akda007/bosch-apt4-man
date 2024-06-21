import Navigation from "./Navigation";
import { GraphB } from "./components/GraphB";
import { GraphA } from "./components/GraphA";
import style from "./Graphs.module.css"

export default function Graphs() {
    return (
        <>
            <Navigation></Navigation>
            <h2>Graphs showcase</h2>
            
            <div className={style.mainContent}>
                <div className={style.graphHolder}>
                    <GraphA></GraphA>

                </div>
                <div className={style.graphHolder}>
                    <GraphB></GraphB>
                </div>
            </div>
        </>
    )
}