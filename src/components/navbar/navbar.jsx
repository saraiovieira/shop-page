import Link from "next/link";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logoContainer}>
        <Image src="/kencko-logo.svg" alt="" fill className={styles.logo}></Image>
      </Link>
      <HiOutlineShoppingBag className={styles.shoppingIcon} />
    </div>
  );
};

export default Navbar;
