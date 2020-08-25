package com.accolite.au.assignment.impl;

import com.accolite.au.assignment.interfaces.ArithmeticOperations;

public class ArithmeticOperationsimpl implements ArithmeticOperations{

	public ArithmeticOperationsimpl() {
		// TODO Auto-generated constructor stub
	}
	
	public void add1(int a,int b)
	{
		System.out.println("The addition is="+(a+b));
	}
	public void sub1(int a,int b)
	{
		System.out.println("The addition is="+(a-b));
	}
	public void mul1(int a,int b)
	{
		System.out.println("The addition is="+(a*b));
	}
	public void div1(int a,int b)
	{
		System.out.println("The addition is="+(a/b));
	}
	

}
