import React from "react";

import OptionBox from "../../components/business/dash/OptionBox";

import styles from "../../styles/Dash.module.scss";

function dash() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <OptionBox optionName="Earned Reviews" emoji="star" />

                    <OptionBox optionName="Opt Ins" emoji="Check" />

                    <OptionBox optionName="Opt Outs" emoji="X" />
                </div>
                <div className={styles.body}>
                    <OptionBox optionName="Opt Ins" emoji="Check" />
                </div>
                <div className={styles.footer}>
                    <OptionBox optionName="Earned Reviews" emoji="star" />

                    <OptionBox optionName="Opt Ins" emoji="Check" />

                    <OptionBox optionName="Opt Outs" emoji="X" />
                </div>
            </div>
        </div>
    );
}

export default dash;
