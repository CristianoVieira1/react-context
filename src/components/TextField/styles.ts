import styled, { css, DefaultTheme } from "styled-components";

import { TextFieldProps } from ".";

type IconPositionProps = Pick<TextFieldProps, "iconPosition">;

type WrapperProps = Pick<TextFieldProps, "disabled"> & { error?: boolean };

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  padding: 0 ${({ theme }) => theme.spacings.xsmall};
  border: 0.1rem solid;
  border-color: ${({ theme }) => theme.colors.lightGray};

  &:focus-within {
    box-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.primary};
  }
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
    padding: ${({ theme }) => theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${({ theme }) => theme.spacings.xxsmall};;
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === "right" ? `calc(100% - 2.2rem)` : `100%`};

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${({ theme }) => theme.spacings.xsmall}
        ${theme.colors.white} inset;
      filter: none;
      &::first-line {
        font-family: ${({ theme }) => theme.font.family};
        font-size: ${({ theme }) => theme.font.sizes.xsmall};
      }
    }
  `}
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.spacings.xxsmall};
  cursor: pointer;
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ iconPosition }) => css`
    display: flex;
    color: ${({ theme }) => theme.colors.black};
    order: ${iconPosition === "right" ? 1 : 0};

    & > svg {
      width: 1.5rem;
      height: 100%;
      color: ${({ theme }) => theme.colors.lightGray};
    }
  `}
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`;

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${({ theme }) => theme.colors.red};
    }

    ${Icon},
    ${Label} {
      color: ${({ theme }) => theme.colors.red};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${({ theme }) => theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`;
