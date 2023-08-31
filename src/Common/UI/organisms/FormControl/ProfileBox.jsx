import { SERVER_URL } from 'Common/Env';
import Badge from 'Common/UI/atoms/Badge';
import Box from 'Common/UI/atoms/Box';
import Button from 'Common/UI/atoms/Button/Button';
import Icon from 'Common/UI/atoms/IconBox';
import React from 'react';
import styled from 'styled-components';

const ProfileBox = ({
    isUser,
    src,
    title,
    info,
    color = 'P_500',
    status,
    btn,
    help,
}) => {
    const colors = {
        P_500: 'P_10',
        S_500: 'S_150',
    };
    return (
        <Wrapper
            color={color}
            bgColor={colors[color] || 'P_10'}
            className="profileBox"
        >
            <div className="img">
                <div>
                    {src ? (
                        <img src={SERVER_URL + src} alt="targetImage" />
                    ) : isUser ? (
                        <Icon.User isActive />
                    ) : (
                        <Icon.Logo style={`margin-bottom:16rem;`} />
                    )}
                </div>
            </div>
            <Box align="center" className="profile" column gap={0}>
                <h4>{title}</h4>
                {info ? (
                    typeof info === 'string' ? (
                        <p className="info">{info}</p>
                    ) : (
                        info?.map((i, key) => <p key={key}>{i}</p>)
                    )
                ) : undefined}
                {status && (
                    <Badge color={color} status size="auto">
                        {status}
                    </Badge>
                )}
            </Box>
            {help && <p className="getText">{help}</p>}
            {btn && (
                <Box width={'100%'} column gap={8}>
                    {btn.title ? (
                        <Button
                            onClick={btn.onClick}
                            size="md"
                            fill
                            Theme="ghost"
                            {...btn}
                        >
                            {btn.title}
                        </Button>
                    ) : (
                        btn?.map((i, key) => (
                            <Button
                                key={key}
                                onClick={i.onClick}
                                size="md"
                                fill
                                Theme="ghost"
                                {...i}
                            >
                                {i.title}
                            </Button>
                        ))
                    )}
                </Box>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    ${({ color, bgColor }) => `
    display:flex;
    align-items:center;
    flex-direction:column;
    gap:16rem;
    margin-top: 60rem;
    position: relative;
    background-color: var(--${bgColor});
    border-radius: 8rem;
    padding: 60rem 24rem 20rem;
    .img {
      width: 116rem;
      height: 116rem;
      border-radius: 100%;
      border: 2rem solid var(--${color});
      padding: 6rem;
      position: absolute;
      top: -60rem;
      >div{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100%;
        border-radius:100%;
        background-color:var(--White);
        overflow:hidden;
          >*{
            width:100%;
            height:100%;
            object-fit: cover;
          }
      }
    }
    .getText{
        font-size:14rem;
    }
    .info{
        white-space: pre-line;
    }
    .profile {
        text-align:center;
        h4 {
            font-size: 18rem;
            font-weight: 500;
            color: var(--G_700);
        }
        p {
            font-size: 12rem;
            color: var(--G_500);
        }
    }
    `}
`;

export default ProfileBox;
