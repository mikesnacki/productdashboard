import React, { useEffect, useRef, useState, JSXElementConstructor }from 'react'

type ToolTipProps = {
    title: string,
    position: string,
    children: JSX.Element;
}