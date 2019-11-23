import React from 'react';
import {
  Flex,
  Heading,
  Image,
  Box,
} from 'rebass';
import { useDeck } from 'mdx-deck';
import { moveTo } from './utils';
import { codeStyles } from './Code';

let globalTitle = 'Intro to React Hooks';
let globalSubtitle = null;

export const setDefaultTitle = (title) => {
  globalTitle = title;
};

export const SectionTitle = ({ children }) => setDefaultTitle(
  (children && children.length > 0 && children) || null,
) || (<></>);

export const setDefaultSubtitle = (subtitle) => {
  globalSubtitle = subtitle;
};

export const SectionSubtitle = ({ children }) => setDefaultSubtitle(
  (children && children.length > 0 && children) || null,
) || (<></>);

const camelToSnake = (str) => str.replace(/[A-Z]/g, (it) => `-${it.toLowerCase()}`);

export default ({
  children,
  height = 50,
  dotsHeight = 50,
  dotsColor = '#aaa',
  headingDotsColor = '#000',
  noTitle = false,
  noSubtitle = false,
  noDots = true,
  noProgress = false,
  title,
  subtitle,
  background,
  icon,
  header = false,
  headerBackground = '#f9e476',
  style = {},
}) => {
  const state = useDeck();
  const {
    index,
    length,
    step,
    steps,
  } = state;
  const dotStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `${dotsHeight / 3}px`,
    height: `${dotsHeight / 3}px`,
    fontSize: `${dotsHeight / 3}px`,
    lineHeight: `${dotsHeight / 3}px`,
    margin: `${dotsHeight / 10}px`,
    cursor: 'pointer',
  };
  const wrapperColor = (header && headerBackground) || (background && `url(${background})`) || '';
  const preCodeStyles = Object
    .keys(codeStyles)
    .map((key) => `${camelToSnake(key)}: inherit;`)
    .join('\n');
  const noPreCodeStyles = Object
    .entries(codeStyles)
    .map(([key, value]) => `${camelToSnake(key)}: ${value};`)
    .join('\n');
  return (
    <Flex
      as="div"
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        background: wrapperColor,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        ...style,
      }}
    >
      <style>
        {`
          img {
            object-fit: contain;
          }
          details, pre, pre code, img {
            max-width: 100%;
            max-height: 100%;
          }
          pre, pre code {
            white-space: pre-wrap;
            ${preCodeStyles}
          }
          code {
            ${noPreCodeStyles}
          }
        `}
      </style>
      <Flex
        justifyContent="flex-start"
        height={height}
        flex={`0 0 ${height}px`}
      >
        <Flex maxWidth={1000} px={25} height="100%" alignItems="center">
          <Image
            src={icon || 'https://jsleague.ro/images/logo/logo-flat.png'}
            p={height / 5}
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              backgroundSize: 'cover',
            }}
          />
          {!noTitle && (title || globalTitle) && (
            <Heading fontSize="14px" fontFamily="inherit">
              {`${title || globalTitle}`}
            </Heading>
          )}
          {!noSubtitle && (subtitle || globalSubtitle) && (
            <Heading fontSize="14px" fontFamily="inherit" pl={1}>
              {` - ${subtitle || globalSubtitle}`}
            </Heading>
          )}
        </Flex>
      </Flex>
      <Flex
        as="div"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        flex="1"
        p={50}
        maxHeight={`calc(100% - ${height + (noDots ? 0 : dotsHeight)}px)`}
      >
        {children}
      </Flex>
      {!noDots && (
        <Flex
          alignItems="center"
          justifyContent="center"
          height={dotsHeight}
          flex={`0 0 ${dotsHeight}`}
        >
          <Box
            key="left"
            sx={{
              ...dotStyle,
              color: header ? headingDotsColor : dotsColor,
              opacity: index === 0 ? 0 : 1,
              cursor: index === 0 ? 'default' : 'pointer',
            }}
            onClick={() => moveTo({ ...state, index: index - 1 })}
          >
            &lt;
          </Box>
          {new Array(length).fill(0).map((_, idx) => (
            <Box
              key={idx} // eslint-disable-line
              onClick={() => moveTo({ ...state, index: idx })}
              sx={{
                ...dotStyle,
                borderRadius: '100%',
                border: `solid 2px ${header ? headingDotsColor : dotsColor}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 0,
                  backgroundColor: header ? headingDotsColor : dotsColor,
                  ...(index === idx && {
                    height:
                      steps > 0
                        ? `${((step + 1) / (steps + 1)) * 100}%`
                        : '100%',
                  }),
                }}
              />
            </Box>
          ))}
          <Box
            key="right"
            sx={{
              ...dotStyle,
              color: header ? headingDotsColor : dotsColor,
              opacity: index === length - 1 ? 0 : 1,
              cursor: index === length - 1 ? 'default' : 'pointer',
            }}
            onClick={() => moveTo({ ...state, index: index + 1 })}
          >
            &gt;
          </Box>
        </Flex>
      )}
      {!noProgress && (
        <Box
          sx={{
            position: 'absolute',
            right: '20px',
            bottom: '20px',
            fontSize: '10px',
          }}
        >
          {`${index}/${length - 1}`}
        </Box>
      )}
      {!noProgress && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '5px',
          }}
        >
          <Box
            sx={{
              height: '100%',
              background: header ? '#000' : headerBackground,
              width: `${(index / (length - 1)) * 100}%`,
            }}
          />
        </Box>
      )}
    </Flex>
  );
};
