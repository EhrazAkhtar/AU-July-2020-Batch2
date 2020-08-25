package com.accolite.au.assignment_test;

import com.accolite.au.assignment.impl.ArithmeticOperationsimpl;
import com.accolite.au.assignment.interfaces.ArithmeticOperations;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) throws ClassNotFoundException
    {
    	ArithmeticOperations obj = new ArithmeticOperationsimpl();
    	
		obj.mul1(3, 4);
		obj.add1(5, 7);
		obj.sub1(13, 3);
		obj.div1(15, 3);
    }
}
