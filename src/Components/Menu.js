import { MenuListContext } from "./MenuContext";
import React, { useContext, useState } from "react";
import styles from "./Menu.module.css";
import Modal from "react-modal";

function Menu() {
  const value = useContext(MenuListContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalDsc, setModalDsc] = useState("");
  const [modalName, setModalName] = useState("");

  // Menü öğelerini kategoriye göre gruplamak için
  const categories = value.reduce((acc, item) => {
    const category = item.genre;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const handleOpenModal = (item) => {
    setModalImg(item.img);
    setModalDsc(item.dsc);
    setModalName(item.name);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.menuContainer}>
      {Object.keys(categories).map((category) => (
        <React.Fragment key={category}>
          <h3 className={styles.category}>{category}</h3>

          {/* Scroll'un kategorilere gitmesi için oluşturulan fake kategoriler */}

          {category === "İçecekler" && (
            <p
              id="içecekler"
              style={{ color: "white", marginBottom: "10px", fontSize: "0px" }}
            >
              İçecekler
            </p>
          )}

          {category === "Tatlılar" && (
            <p
              id="tatlı"
              style={{ color: "white", marginBottom: "10px", fontSize: "0px" }}
            >
              Tatlılar
            </p>
          )}
          {category === "Ana Yemekler" && (
            <p
              id="yemek"
              style={{ marginBottom: "10px", color: "white", fontSize: "0px" }}
            >
              Ana Yemekler
            </p>
          )}
          {category === "Salatalar" && (
            <p
              id="salata"
              style={{ marginBottom: "10px", color: "white", fontSize: "0px" }}
            >
              Salata
            </p>
          )}

          <ul className={styles.menuList}>
            {categories[category].map((item) => (
              <li key={item.id} className={styles.menuItem}>
                <div className={styles.menuItemImg}>
                  <img src={item.img} alt={item.name} />
                </div>
                <div className={styles.menuItemInfo}>
                  <h4>{item.name}</h4>
                  <p>{item.dsc}</p>
                  <span className={styles.price}>{item.price} TL</span>
                  <i
                    className="fas fa-info-circle"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      width: "60px",
                      color: "blue",
                    }}
                    onClick={() => handleOpenModal(item)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Product Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className="card mx-auto" style={{ maxWidth: "30rem" }}>
          <div className={styles.modalImg}>
            <img src={modalImg} alt={modalName} className="card-img-top" />
          </div>
          <div className="card-body">
            <h4 className="card-title">{modalName}</h4>
            <p className="card-text">{modalDsc}</p>
          </div>
          <button onClick={handleCloseModal} className={styles.btnClose}>
            X
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Menu;
