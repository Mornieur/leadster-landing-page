import * as S from './styles';
import { FC, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { orderByValues, useVideoStore } from '@/store';

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
  itemText = 'Item',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { category, handleStoreValues, orderBy } = useVideoStore();
  const menuItems = [
    'Agencias',
    'Chatbot',
    'Marketing Digital',
    'Geração de Leads',
    'Mídia Paga',
  ];

  return (
    <S.Container>
      <motion.div
        className="buttonsMenu"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <S.Menu>
          {menuItems.map((item, index) => (
            <S.Button
              role="button"
              key={index}
              active={category === item}
              onClick={() => {
                handleStoreValues('category', item === category ? null : item);
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
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {orderBy}
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
                  maxWidth: '200px',
                  width: '100%',
                }}
              >
                {orderByValues.map((value, index) => (
                  <motion.li
                    onClick={() => handleStoreValues('orderBy', value)}
                    key={index}
                    variants={itemVariants}
                  >
                    {value}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          </S.OrderList>
        </S.Menu>
      </motion.div>
    </S.Container>
  );
};
