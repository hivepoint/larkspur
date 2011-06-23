package com.sevogle.link.common.web.client;

import java.util.Random;

import org.junit.Assert;
import org.junit.Test;

import com.sevogle.link.common.web.client.DirectiveParameter.InvalidTypeException;

public class DirectiveParameterTest {
    private Random rand = new Random();

    @Test
    public void testGetBool() {
        boolean exp = rand.nextBoolean();
        String name = "bool value";
        DirectiveParameter value = DirectiveParameter.createParameter(name, exp);
        Assert.assertEquals(exp, value.getBoolValue());
        Assert.assertEquals("" + exp, value.toString());
        Assert.assertEquals(name, value.getName());

        // Make sure the others fail
        try {
            value.getIntValue();
            Assert.fail("Should not reach this point getInt");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getStringValue();
            Assert.fail("Should not reach this point getString");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getDoubleValue();
            Assert.fail("Should not reach this point getDouble");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getLongValue();
            Assert.fail("Should not reach this point getLong");
        } catch (InvalidTypeException e) {
        }
    }

    @Test
    public void testGetDouble() {
        double exp = rand.nextDouble();
        DirectiveParameter value = DirectiveParameter.createParameter("double value", exp);
        Assert.assertEquals(exp, value.getDoubleValue(), 0.0001);
        Assert.assertEquals("" + exp, value.toString());

        // Make sure the others fail
        try {
            value.getBoolValue();
            Assert.fail("Should not reach this point getDouble");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getIntValue();
            Assert.fail("Should not reach this point getInt");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getStringValue();
            Assert.fail("Should not reach this point getString");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getLongValue();
            Assert.fail("Should not reach this point getLong");
        } catch (InvalidTypeException e) {
        }
    }

    @Test
    public void testGetInt() {
        int exp = rand.nextInt();
        DirectiveParameter value = DirectiveParameter.createParameter("int value", exp);
        Assert.assertEquals(exp, value.getIntValue());
        Assert.assertEquals("" + exp, value.toString());

        // Make sure the others fail
        try {
            value.getBoolValue();
            Assert.fail("Should not reach this point getDouble");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getDoubleValue();
            Assert.fail("Should not reach this point getDouble");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getStringValue();
            Assert.fail("Should not reach this point getString");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getLongValue();
            Assert.fail("Should not reach this point getLong");
        } catch (InvalidTypeException e) {
        }
    }

    @Test
    public void testGetLong() {
        long exp = rand.nextLong();
        DirectiveParameter value = DirectiveParameter.createParameter("long value", exp);
        Assert.assertEquals(exp, value.getLongValue());
        Assert.assertEquals("" + exp, value.toString());

        // Make sure the others fail
        try {
            value.getBoolValue();
            Assert.fail("Should not reach this point getDouble");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getDoubleValue();
            Assert.fail("Should not reach this point getDouble");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getIntValue();
            Assert.fail("Should not reach this point getInt");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getStringValue();
            Assert.fail("Should not reach this point getString");
        } catch (InvalidTypeException e) {
        }
    }

    @Test
    public void testGetString() {
        String exp = rand.nextDouble() + " " + rand.nextInt();
        DirectiveParameter value = DirectiveParameter.createParameter("string value", exp);
        Assert.assertEquals(exp, value.getStringValue());
        Assert.assertEquals("" + exp, value.toString());

        // Make sure the others fail
        try {
            value.getBoolValue();
            Assert.fail("Should not reach this point getDouble");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getDoubleValue();
            Assert.fail("Should not reach this point getDouble");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getIntValue();
            Assert.fail("Should not reach this point getInt");
        } catch (InvalidTypeException e) {
        }
        try {
            value.getLongValue();
            Assert.fail("Should not reach this point getLong");
        } catch (InvalidTypeException e) {
        }
    }

    @Test
    public void testInvalidInput() throws Exception {
        try {
            DirectiveParameter.createParameter(null, rand.nextBoolean());
            Assert.fail("Shouldn't reach here bool");
        } catch (IllegalArgumentException e) {
            Assert.assertEquals("Name cannot be null.", e.getMessage());
        }
        try {
            DirectiveParameter.createParameter(null, rand.nextDouble());
            Assert.fail("Shouldn't reach here double");
        } catch (IllegalArgumentException e) {
            Assert.assertEquals("Name cannot be null.", e.getMessage());
        }
        try {
            DirectiveParameter.createParameter(null, rand.nextInt());
            Assert.fail("Shouldn't reach here int");
        } catch (IllegalArgumentException e) {
            Assert.assertEquals("Name cannot be null.", e.getMessage());
        }
        try {
            DirectiveParameter.createParameter(null, rand.nextLong());
            Assert.fail("Shouldn't reach here long");
        } catch (IllegalArgumentException e) {
            Assert.assertEquals("Name cannot be null.", e.getMessage());
        }
        try {
            DirectiveParameter.createParameter(null, rand.nextBoolean() + " " + rand.nextDouble());
            Assert.fail("Shouldn't reach here string");
        } catch (IllegalArgumentException e) {
            Assert.assertEquals("Name cannot be null.", e.getMessage());
        }
        try {
            DirectiveParameter.createParameter(null, null);
            Assert.fail("Shouldn't reach here long");
        } catch (IllegalArgumentException e) {
            Assert.assertEquals("Value cannot be null", e.getMessage());
        }
        try {
            DirectiveParameter.createParameter("Trying", null);
            Assert.fail("Shouldn't reach here long");
        } catch (IllegalArgumentException e) {
            Assert.assertEquals("Value cannot be null", e.getMessage());
        }

    }

}
