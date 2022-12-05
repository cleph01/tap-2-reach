import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tap 2 Reach - The Lockdown Insurance Plan</title>
                <meta
                    name="description"
                    content="Text Messaging Client Management System"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div
                    style={{
                        backgroundColor: "#fafafa",
                        padding: "16px",
                        textDecoration: "underline",
                    }}
                >
                    <ul style={{ lineHeight: "36px" }}>
                        <li>
                            <Link href="/business/notification/add-reminder">
                                Ser A Reminder SMS
                            </Link>
                        </li>
                        <li>
                            <Link href="/business/add-client">
                                Add a Customer to the DB
                            </Link>
                        </li>
                        <li>
                            <Link href="/business/chats">See Your Chats</Link>
                        </li>
                        <li>
                            <Link href="/business/clients">
                                See Your Clients
                            </Link>
                        </li>
                        <li>
                            <Link href="/business/dash">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/business/send-message">
                                Send A Blast
                            </Link>
                        </li>
                    </ul>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}
