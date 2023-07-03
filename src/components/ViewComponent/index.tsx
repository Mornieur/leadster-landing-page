import * as S from './styles';
import { FC, useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface ViewComponentProps {
  orderList?: string;
  dropDownText?: string;
  itemText?: string;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const ViewComponent: FC<ViewComponentProps> = ({
  orderList = 'Ordenar por',
  dropDownText = 'Data de Publicação',
  itemText = 'Item',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    'Agencias',
    'Chatbot',
    'Marketing Digital',
    'Geração de Leads',
    'Mídia Paga',
  ];

  const [activeButton, setActiveButton] = useState<string | null>(null);

  return (
    <S.Container>
      <S.Menu>
        {menuItems.map((item, index) => (
          <S.Button
            role="button"
            key={index}
            active={activeButton === item}
            onClick={() => {
              setActiveButton(activeButton === item ? null : item);
            }}
          >
            {item}
          </S.Button>
        ))}
        <S.OrderList>
          <p>{orderList}</p>
          <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            className="menu"
            style={{ overflow: 'hidden' }}
          >
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {dropDownText}
              <motion.div
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0.55 }}
              >
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" />
                </svg>
              </motion.div>
            </motion.button>
            <motion.ul
              variants={{
                open: {
                  clipPath: 'inset(0% 0% 0% 0% round 10px)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.7,
                    delayChildren: 0.3,
                    staggerChildren: 0.05,
                  },
                },
                closed: {
                  clipPath: 'inset(10% 50% 90% 50% round 10px)',
                  transition: {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.3,
                  },
                },
              }}
              style={{
                pointerEvents: isOpen ? 'auto' : 'none',
                zIndex: isOpen ? '999' : 'none',
                position: 'absolute',
                maxWidth: '300px',
                width: '100%',
              }}
            >
              <motion.li variants={itemVariants}>{itemText}</motion.li>
              <motion.li variants={itemVariants}>{itemText}</motion.li>
              <motion.li variants={itemVariants}>{itemText}</motion.li>
              <motion.li variants={itemVariants}>{itemText}</motion.li>
              <motion.li variants={itemVariants}>{itemText}</motion.li>
            </motion.ul>
          </motion.nav>
        </S.OrderList>
      </S.Menu>
    </S.Container>
  );
};
