import React, { Component } from 'react';
import * as Bootstrap from 'react-bootstrap';

export const KitchenName = function()
{

        return(
            <Bootstrap.FormControl componentClass="select" placeholder="select">
              <option value="select">Salarpuria Greenage</option>
              <option value="other">...</option>
            </Bootstrap.FormControl>
        );

}
export const KitchenBlock = function()
{

        return(
            <Bootstrap.FormControl componentClass="select" placeholder="select">
                <option value="select">Oak</option>
                <option value="other">...</option>
            </Bootstrap.FormControl>
        );

}
export const KitchenWing = function()
{

        return(
            <Bootstrap.FormControl componentClass="select" placeholder="select">
                <option value="select">C</option>
                <option value="other">...</option>
            </Bootstrap.FormControl>
        );

}
export const KitchenFlatNo = function()
{

        return(
            <Bootstrap.FormControl componentClass="select" placeholder="select">
                <option value="select">2004</option>
                <option value="other">...</option>
            </Bootstrap.FormControl>
        );

}
