import React from "react";

import OptionBox from "../../components/business/dash/OptionBox";
import CellPhoneBox from "../../components/business/dash/CellPhoneBox";

import styles from "../../styles/Dash.module.scss";

function dash() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <OptionBox optionName="Earned Reviews" emoji="⭐" />

                    <OptionBox optionName="Opt Ins" emoji="✅" />

                    <OptionBox optionName="Opt Outs" emoji="❌" />
                </div>
                <div className={styles.body}>
                    <CellPhoneBox optionName="Send Blast" emoji="cell" />
                </div>
                <div className={styles.footer}>
                    <OptionBox optionName="Send a Reminedr" emoji="📲" />

                    <OptionBox optionName="Holiday Messages" emoji="💌" />

                    <OptionBox optionName="Book Appointments" emoji="📅" />
                </div>
            </div>
        </div>
    );
}

export default dash;
